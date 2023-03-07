import React from 'react'
import { Link } from 'react-router-dom'

function BackButton({ children }) {
    return (
        <Link className="back-link" to="/">
            {children}
        </Link>
    )
}

export default BackButton
