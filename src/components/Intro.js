import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Fade, Zoom } from 'react-reveal'
import cv from '../imgs/cv pic.jpg'
import IntroStyles from './intro.module.css'

const Intro = () => {
    return (
        <div>
            <Container className={'mt-5'}>
                <Zoom>
                    <Image src={cv} fluid rounded className={IntroStyles.profilePic}/>
                </Zoom>
                <Fade left>
                <h1>Hi! I&apos;m Vincent Sutinah!</h1>
                </Fade>
                <Fade right>
                <p>I&apos;m a Computer Science graduate and I am currently looking for opportunities that will allow me to gain experience as a web developer.</p>
                </Fade>
            </Container>
        </div>
    )
}

export default Intro
