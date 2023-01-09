import React, {FC, ReactNode} from 'react'
import s from './Hint.module.scss'

interface Props {
    children?: ReactNode
    radius?: number
    top?: number
    left?: number
    right?: number
    bottom?: number
    lineHeight?: number
    max?: number
    boolType?: boolean
};



const Hint: FC<Props> = ({children=0,radius=11,top,left,right,bottom,lineHeight,max,boolType}) => {

    let size = radius*2+"px"
    let borderR = radius+'px'

     return (
         children
             ?<div style={{width: size,height:size,borderRadius: borderR
                 ,top:top?top+'px':"unset",left:left?left+'px':"unset",right:right?right+'px':"unset",bottom:bottom?bottom+'px':"unset"
                 ,lineHeight: lineHeight+'px', backgroundColor: max && max < children? '#ec6a09' : '#85D325',color:boolType? max && max < children?'#ec6a09' : '#85D325': 'white'}}
                       className={s.Hint}>
                 {children}
             </div>
             : <></>

     )
    }

export default Hint