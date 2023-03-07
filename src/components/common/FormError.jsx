import React from 'react'
import PropTypes from 'prop-types'

export default function ValidationError({ children }) {
    return <span className="form-error">{children}</span>
}

ValidationError.propTypes = {
    children: PropTypes.node.isRequired,
}
