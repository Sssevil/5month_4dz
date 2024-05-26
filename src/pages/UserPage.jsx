import React from 'react'
import { useSelector } from 'react-redux'

const UserPage = () => {
    const user = useSelector((state) => state.user)
    return (
        <div className='user'>
            <span>Имя:{user.user.name} </span>
            <span>Возраст:{user.user.age} </span>
            <span>Пол:{user.user.gender} </span>
            <span>Профиль:{user.profile} </span>
        </div>
    )
}

export default UserPage
