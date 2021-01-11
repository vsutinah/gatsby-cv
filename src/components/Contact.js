import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import ContactStyles from './contact.module.css'

const Contact = () => {
    return (
        <div>
            <Card>
                <Card.Title className={'mt-3'}>You can contact me through these platforms!</Card.Title>
                <Row>
                    <Col className={'mb-3'}>
                        <a href="mailto:vincentsutinah@gmail.com"><FaEnvelope className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-1'}>Email</Card.Subtitle>
                    </Col>
                    <Col className={'mb-3'}>
                        <a href="https://www.linkedin.com/in/vincentsutinah/"><FaLinkedinIn className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-1'}>LinkedIn</Card.Subtitle>    
                    </Col>
                    <Col className={'mb-3'}>
                        <a href="https://github.com/vsutinah/"><FaGithub className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-1'}>GitHub</Card.Subtitle>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Contact
