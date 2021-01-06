import React from 'react'
import { Button } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <div>
            <h5>I&apos;d love to talk! Email me at the address below:</h5>
            <p>
                <a href="mailto:vincentsutinah@gmail.com">vincentsutinah@gmail.com</a>
            </p>
            <h5>You can also view my online profiles here:</h5>
            <p>
                <Button href="https://www.linkedin.com/in/vincentsutinah/" target='_blank'>
                    <FaLinkedinIn /> LinkedIn
                </Button>
            </p>
            <p>
                <Button variant='dark' href="https://github.com/vsutinah/" target='_blank'>
                    <FaGithub /> GitHub
                </Button>
            </p>
        </div>
    )
}

export default Contact
