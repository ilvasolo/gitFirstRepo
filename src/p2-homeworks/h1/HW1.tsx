import React from 'react'
import Message from "./Message";

const messageData = {
    ava: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const HW1: React.FC =(props)=>  {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                ava={messageData.ava}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/> 
        </div>
    )
}

export default HW1
