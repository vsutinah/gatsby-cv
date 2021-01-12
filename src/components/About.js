import React from 'react'
import { Card } from 'react-bootstrap'

const About = () => {
    return (
        <div>
            <Card>
                <Card.Body style={{ textAlign: `left` }}>
                    <Card.Text>I have recently graduated with a Distinction average while specializing in Data Science, and with it, I&apos;ve managed to accomplish various things. From understanding and training different machine learning models, to analysing large datasets 
                                and visualising them to offer innovative ideas, I have culminated the results of my 3-year learning with the development of a web app that applies all of the knowledge and skills I have obtained from learning about data science.</Card.Text>
                    <Card.Text>Whilst learning more about data science, I have also dabbled in web and software development, which led me to design and develop simple web apps, both alone and with colleagues I&apos;ve met. It also led me to discover that my true passion lies mainly in coding, development and designing apps.</Card.Text>
                    <Card.Text>As such, I have decided to look for opportunities that would grant me industry experience to develop and maintain scalable apps. While doing so, I continue to work on my side projects that focus on using NodeJS and React to further hone my skills.</Card.Text>
                    <Card.Text>In the future, I aim to develop scalable software that will be essential for the data science industry, using the data science knowledge I have and the development skills that I am currently training.</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default About
