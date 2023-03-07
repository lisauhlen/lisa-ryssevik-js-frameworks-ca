import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container } from 'react-bootstrap'
import AuthContext from '../context/AuthContext'
import { BASE_URL, TOKEN_PATH } from '../constants/api/api'
import Heading from './layout/Heading'
import FormError from './common/FormError'

const schema = yup.object().shape({
    username: yup.string().required('Please enter your username'),
    password: yup.string().required('Please enter your password'),
})

function Login() {
    const [submitting, setSubmitting] = useState(false)
    const [loginError, setLoginError] = useState(null)
    const [auth, setAuth] = useContext(AuthContext) // eslint-disable-line

    const url = BASE_URL + TOKEN_PATH

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    async function onSubmit(data) {
        setSubmitting(true)
        setLoginError(null)

        console.log(data)

        try {
            const response = await axios.post(url, data)
            console.log('response', response.data)
            setAuth(response.data)
            navigate('/admin')
        } catch (error) {
            console.log('error', error)
            setLoginError(error.toString())
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <Container className="container">
            <Heading title="Login" />
            <form onSubmit={handleSubmit(onSubmit)}>
                {loginError && (
                    <FormError>
                        <div className="form-message">
                            <p>
                                Please make sure you're using the correct
                                username and password.
                            </p>{' '}
                            <p>
                                If the error continues, please try again later.
                            </p>
                            {loginError}
                        </div>
                    </FormError>
                )}
                <fieldset disabled={submitting}>
                    <input {...register('username')} placeholder="Username" />
                    {errors.username && (
                        <FormError>{errors.username.message}</FormError>
                    )}

                    <input
                        {...register('password')}
                        placeholder="Password"
                        type="password"
                    />
                    {errors.password && (
                        <FormError>{errors.password.message}</FormError>
                    )}

                    <button>{submitting ? 'Loggin in...' : 'Login'}</button>
                </fieldset>
            </form>
        </Container>
    )
}

export default Login
