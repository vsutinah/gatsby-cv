import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFileDownload } from 'react-icons/fa'
import { Card } from 'react-bootstrap'
import cv from '../static/CV_Vincent Sutinah (SoftDev).pdf'

const Resume = () => {
    return (
        <div>
            <Card>
                <Card.Title className={'mt-3'}>Feel free to download my resume by clicking the button below! </Card.Title>
                <Card.Body>
                    <Button variant='primary' href={cv} download><FaFileDownload/> Download </Button>
                </Card.Body>
            </Card>
            <p></p>
            
        </div>
    )
}

export default Resume
