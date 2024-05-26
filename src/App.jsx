import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormPage from './pages/FormPage'
import UserPage from './pages/UserPage'
import Layout from './components/Layout'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<FormPage />} />
                    <Route path="user" element={<UserPage />} />
                    <Route path="*" element={<h1>404</h1>} />
                </Route>
            </Routes>
        </>
    )
}

export default App
