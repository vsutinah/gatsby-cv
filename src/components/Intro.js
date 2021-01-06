import React from 'react'
import { Image } from 'react-bootstrap'
import profile from '../imgs/cv pic.jpg'

const Intro = () => {
    return (
        <div>
            <Image src={profile} alt='Profile Picture' roundedCircle className='profilePic'/>
            <h2>Hi! I&apos;m Vincent Sutinah!</h2>
            <p>I&apos;m a Computer Science graduate and I am looking for opportunities that will allow me to gain experience as a web developer.</p>
        </div>
    )
}

export default Intro
