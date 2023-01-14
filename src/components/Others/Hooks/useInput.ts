import React, {useCallback, useEffect, useState} from "react";

interface IUseInputReturn {
    value:string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void
    isDirty: boolean
    isEmpty?: boolean
    minLengthError?: boolean
    maxLengthError?: boolean
    inputValid: boolean
    errors:Array<string>
}

interface IValidations {
    isEmpty?: boolean
    minLength?: number
    maxLength?: number
}
interface IUseValidationReturn {
    isEmpty: boolean
    minLengthError?: boolean
    maxLengthError?: boolean
    inputValid: boolean
    errors:Array<string>
}

export const useInput = (initialValue:string,validations:IValidations):IUseInputReturn => {
    const [value,setValue] = useState<string>(initialValue)
    const [isDirty,setDirty] = useState<boolean>(false)
    const valid = useValidation(value,validations)

    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
    },[])
    const onBlur = useCallback((): void => {
        setDirty(true)
    },[])

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}

const useValidation = (value:string, validations:IValidations):IUseValidationReturn => {

    const [isEmpty,setEmpty] = useState<boolean>(true)
    const [minLengthError,setMinLengthError] = useState<boolean>(typeof validations['minLength'] === "number")
    const [maxLengthError,setMaxLengthError] = useState<boolean>(typeof validations['maxLength'] === "number")

    const [errors, setErrors] = useState<Array<string>>([])
    const [inputValid, setInputValid] = useState<boolean>(false)

    useEffect(() => {
        for (let validation in validations) {
            switch (validation) {

                case 'minLength':
                    if (typeof validations['minLength'] === "number") {
                        value.length < validations['minLength'] ? setMinLengthError(true) : setMinLengthError(false)
                    }
                    break

                case 'maxLength':
                    if (typeof validations['maxLength'] === "number") {
                        value.length > validations['maxLength'] ? setMaxLengthError(true) : setMaxLengthError(false)
                    }
                    break

                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
            }

        }
    },[value])

    useEffect(() => {
        if (isEmpty||minLengthError||maxLengthError) {
            setInputValid(false)

            if (isEmpty && !errors.some(value => value === `Поле не заполнено`)) {
                setErrors(prevState => [...prevState, `Поле не заполнено`])
            } else if (!isEmpty && errors.some(value => value === `Поле не заполнено`)) {
                setErrors(prevState => prevState.filter(value => value!== `Поле не заполнено`))
            }

            if (validations['minLength'] && minLengthError && !errors.some(value => value === `Должно быть минимум ${validations['minLength']} символов`)) {
                setErrors(prevState => [...prevState, `Должно быть минимум ${validations['minLength']} символов`])
            } else if (!minLengthError && errors.some(value => value === `Должно быть минимум ${validations['minLength']} символов`)) {
                setErrors(prevState => prevState.filter(value => value!== `Должно быть минимум ${validations['minLength']} символов`))
            }

            if (validations['maxLength'] && maxLengthError && !errors.some(value => value === `Должно быть максимум ${validations['maxLength']} символов`)) {
                setErrors(prevState => [...prevState, `Должно быть максимум ${validations['maxLength']} символов`])
            } else if (!maxLengthError && errors.some(value => value === `Должно быть максимум ${validations['maxLength']} символов`)) {
                setErrors(prevState => prevState.filter(value => value!== `Должно быть максимум ${validations['maxLength']} символов`))
            }
        } else {
            setErrors([])
            setInputValid(true)
        }
    },[isEmpty, minLengthError,maxLengthError])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        inputValid,
        errors
    }
}
