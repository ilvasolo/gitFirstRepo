import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]// need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any



    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { // need to fix any
       const trimmedName = event.currentTarget.value.trim()// need to fix
        if (trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError("Title is Required")
        }
    }

    const addUser = () => {
        addUserCallback(name)
        alert("Hello" + " " + name + " !")
    }

    const setChangeCallback = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.charCode === 13 && name) {
            addUser()
        }
    }

    let totalUsers = users.length

    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setChangeCallback={setChangeCallback}

        />
    )
}

export default GreetingContainer
