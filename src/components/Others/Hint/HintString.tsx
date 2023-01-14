import React, {FC, ReactNode} from 'react'
import s from './HintString.module.scss'

interface Props {
    children: ReactNode
    radius?: number
    top?: number
    left?: number
    right?: number
    bottom?: number
    lineHeight?: number
    max?: number
    boolType?: boolean
};

const HintString: FC<Props> = ({children,top,left,right,bottom}) => {

     return (
         children
             ?<div style={{top:top?top+'px':"unset",left:left?left+'px':"unset",right:right?right+'px':"unset",bottom:bottom?bottom+'px':"unset"}}
                       className={s.Hint}>
                 {children}
             </div>
             : <></>

     )
    }

export default HintString