import React from 'react'


type  MessageDataType = {
    ava: string
    name: string
    message: string
    time: string
}

const Message =(props : MessageDataType)=> {
    return (
        <div>
            <div>{props.ava}</div>
            {props.name}
            {props.message}
            {props.time}
        </div>
    )
}

export default Message;
