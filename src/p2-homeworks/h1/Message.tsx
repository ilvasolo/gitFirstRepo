import React from 'react'
import style from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}
const Message: React.FC<MessagePropsType> = ({
                                                        avatar,
                                                        name,
                                                        message,
                                                        time

                                                    }) => {
    return (
        <div className={style.HW1}>
            <img src={avatar} alt=""/>
            <div className={style.userPage}>
                <div>{name}</div>
                <div>{message}</div>
                <div>{time}</div>
            </div>
        </div>
    )
}

export default Message
