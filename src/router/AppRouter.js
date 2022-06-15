import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import CountryPage from '../pages/CountryPage'
import HomePage from '../pages/HomePage'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"  element={ <HomePage /> } />
                    <Route path="/country/:name" element={ <CountryPage /> } />
    
                    <Route path="*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter