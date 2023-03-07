import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import { BASE_URL, POSTS_PATH, CORS_URL } from '../constants/api/api'
import Heading from './layout/Heading'
import BackButton from './common/BackButton'

function SinglePost() {
    const [post, setPost] = useState({})

    const { id } = useParams()

    const url = CORS_URL + BASE_URL + POSTS_PATH + id

    useEffect(
        function () {
            async function getPosts() {
                try {
                    const response = await axios.get(url)
                    console.log(response.data)
                    setPost(response.data)
                } catch (error) {
                    console.log(error)
                }
            }
            getPosts()
        },
        [url]
    )

    return (
        <Container className="container">
            <Heading title={post.title?.rendered} />
            <main>
                <p className="post-date">Posted: {post.date}</p>
                <div
                    className="post-content"
                    dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
                />
                <BackButton>← Back</BackButton>
            </main>
        </Container>
    )
}

export default SinglePost
