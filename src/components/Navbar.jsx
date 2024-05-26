import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'red' : ''
    }
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={activeLinkClass}>
                        forma
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user" className={activeLinkClass}>
                        user
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
