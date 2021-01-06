import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFileDownload } from 'react-icons/fa'
import cv from '../static/CV_Vincent Sutinah (SoftDev).pdf'

const Resume = () => {
    return (
        <div>
            <h3>Resume</h3>
            <p>Feel free to download my resume by clicking the button below! </p>
            <Button variant='primary' href={cv} download><FaFileDownload/> Download </Button>
        </div>
    )
}

export default Resume
