import React from 'react'
import { useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import AuthContext from '../../context/AuthContext'

function Navigation() {
    const [auth, setAuth] = useContext(AuthContext)
    const navigate = useNavigate()

    function logout() {
        setAuth(null)
        console.log('Logging out')
        navigate('/')
    }

    return (
        <Navbar>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {auth ? (
                <>
                    <NavLink to="/admin">Admin</NavLink>
                    <Button onClick={logout} className="logout">
                        Logout
                    </Button>
                </>
            ) : (
                <NavLink to="/login">Login</NavLink>
            )}
        </Navbar>
    )
}

export default Navigation
