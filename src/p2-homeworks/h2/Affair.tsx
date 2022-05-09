import React from 'react'
import {AffairType} from "./HW2";
import style from "./Affair.module.css"


type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={style.affCont}>
            <div className={style.affN}>
                {props.affair.name}
            </div>
            <div className={style.affPr}>
                {props.affair.priority}
            </div>
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
