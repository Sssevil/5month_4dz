import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const FormPage = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        gender: '',
        profile: '',
    })

    const dispatch = useDispatch()
    const changeInput = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: 'SET_USER',
            payload: { name: user.name, age: user.age, gender: user.gender },
        })
        dispatch({ type: 'SET_PROFILE', payload: user.profile })
        setUser({ name: '', age: '', gender: '', profile: '' })
    }
    return (
        <div>
            <form onChange={changeInput} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    value={user.name}
                />
                <input
                    type="text"
                    placeholder="age"
                    name="age"
                    value={user.age}
                />
                <input
                    type="text"
                    placeholder="gender"
                    name="gender"
                    value={user.gender}
                />
                <input
                    type="text"
                    placeholder="profile"
                    name="profile"
                    value={user.profile}
                />
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default FormPage
