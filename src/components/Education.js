import React from 'react'
import { CardDeck, Card } from 'react-bootstrap'

const Education = () => {
    return (
        <div>
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Bachelor of Computer Science</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Jul 2017 - Dec 2019</Card.Subtitle>
                        <Card.Text>Monash University<br/>Melbourne, Victoria</Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Diploma of Information Technology</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Oct 2016 - June 2017</Card.Subtitle>
                        <Card.Text>Monash College<br/>Melbourne, Victoria</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    )
}

export default Education
