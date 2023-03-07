import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import AuthContext from '../context/AuthContext'
import Heading from './layout/Heading'

function Admin() {
    const [auth] = useContext(AuthContext)

    if (!auth) {
        console.log('User is not logged in.')

        return (
            <Container className="container">
                <Heading title="Admin Page" />
                <main>
                    <p>Please log in to use the Admin Panel.</p>
                </main>
            </Container>
        )
    } else console.log('User is logged in.')

    return (
        <Container className="container">
            <Heading title="Admin Page" />
            <main>
                <p>You are now logged in.</p>
            </main>
        </Container>
    )
}

export default Admin
