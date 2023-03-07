import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/layout/Navigation'
import { AuthProvider } from './context/AuthContext'
import Home from './components/Home'
import SinglePost from './components/SinglePost'
import Contact from './components/Contact'
import Admin from './components/Admin'
import Login from './components/Login'
import './styles/globals.scss'
import './styles/style.scss'

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<SinglePost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
