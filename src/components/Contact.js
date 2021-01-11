import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import ContactStyles from './contact.module.css'

const Contact = () => {
    return (
        <div>
            <Card>
                <Card.Title className={'mt-3'}>You can contact me through these platforms!</Card.Title>
                <Row className={'mt-3 mb-3'}>
                    <Col>
                        <a href="mailto:vincentsutinah@gmail.com"><FaEnvelope className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-2'}>Email</Card.Subtitle>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/vincentsutinah/"><FaLinkedinIn className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-2'}>LinkedIn</Card.Subtitle>    
                    </Col>
                    <Col>
                        <a href="https://github.com/vsutinah/"><FaGithub className={ContactStyles.icon}/></a>
                        <br/>
                        <Card.Subtitle className={'mt-2'}>GitHub</Card.Subtitle>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Contact
