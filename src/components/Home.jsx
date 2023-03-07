import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Heading from './layout/Heading'
import { BASE_URL, POSTS_PATH } from '../constants/api/api'

function Home() {
    const [posts, setPosts] = useState([])

    const url = BASE_URL + POSTS_PATH

    useEffect(
        function () {
            async function getPosts() {
                try {
                    const response = await axios.get(url)
                    setPosts(response.data)
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
            <Heading title="Home" />
            <main>
                {posts.map((post) => {
                    return (
                        <Link
                            key={post.id}
                            to={`/detail/${post.id.toString()}`}
                        >
                            <div>
                                <h2>{post.title.rendered}</h2>
                                <p className="post-date">{post.date}</p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt.rendered,
                                    }}
                                />
                            </div>
                        </Link>
                    )
                })}
            </main>
        </Container>
    )
}

export default Home
