import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Heading from './layout/Heading'
import FormError from '../components/common/FormError'
import BackButton from './common/BackButton'
import { Container } from 'react-bootstrap'

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('Please enter your first name.')
        .min(1, 'The name must contain at least one character.'),
    lastName: yup
        .string()
        .required('Please enter your last name.')
        .min(2, 'The name must contain at least two characters.'),
    email: yup
        .string()
        .required('Please enter an email address.')
        .email('Please enter a valid email address.'),
    subject: yup.string().required('Please select a subject.'),
    message: yup
        .string()
        .required('Please enter your message.')
        .min(10, 'The message must contain at least 10 characters.'),
})

function Contact() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    })

    const [submitting, setSubmitting] = useState(false)

    function onSubmit(data) {
        setSubmitting(true)
        console.log(data)
        console.log(setSubmitting)
    }

    console.log(errors)

    if (submitting) {
        return (
            <Container className="container">
                <Heading title="Contact" />
                <main>
                    <div className="form-message">
                        <p>
                            Thanks for getting in touch! You'll hear from us
                            within 24 hours.
                        </p>
                        <BackButton>← Home</BackButton>
                    </div>
                </main>
            </Container>
        )
    }

    return (
        <Container className="container">
            <Heading title="Contact" />
            <main>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="contact-form"
                >
                    <input
                        {...register('firstName')}
                        placeholder="First Name"
                    />
                    {errors.firstName && (
                        <FormError>{errors.firstName.message}</FormError>
                    )}

                    <input {...register('lastName')} placeholder="Last Name" />
                    {errors.lastName && (
                        <FormError>{errors.lastName.message}</FormError>
                    )}

                    <input {...register('email')} placeholder="Email" />
                    {errors.email && (
                        <FormError>{errors.email.message}</FormError>
                    )}

                    <select
                        {...register('subject')}
                        onChange={(e) =>
                            setValue('subject', e.target.value, {
                                shouldValidate: true,
                            })
                        }
                    >
                        <option value="">Select subject:</option>
                        <option value="1">First subject</option>
                        <option value="2">Second subject</option>
                        <option value="3">Third subject</option>
                    </select>
                    {errors.subject && (
                        <FormError>{errors.subject.message}</FormError>
                    )}

                    <textarea {...register('message')} placeholder="Message" />
                    {errors.message && (
                        <FormError>{errors.message.message}</FormError>
                    )}

                    <button>Send</button>
                </form>
            </main>
        </Container>
    )
}

export default Contact
