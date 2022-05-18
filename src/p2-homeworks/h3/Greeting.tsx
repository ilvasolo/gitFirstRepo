import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number// need to fix any
    setChangeCallback: (event: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setChangeCallback} // деструктуризация пропсов
) => {
    //const inputClass = error ? s.error : ""// need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={setChangeCallback}
                   className={error ? s.error : ""}/>
            <div>
                <span className={error ? s.errorMes : ""}>{error}</span>
            </div>
            <button onClick={() => addUser(name)}>add</button>
            {totalUsers}
        </div>
    )
}

export default Greeting
