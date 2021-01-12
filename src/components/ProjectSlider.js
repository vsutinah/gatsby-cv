import React from 'react'
import { Col, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import showcase from '../imgs/showcase.jpg'

const ProjectSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ] 
      };

      
    return (
        <Slider {...settings}>
            <Col>
            <Card>
                <Card.Img height='178px' variant='top' src='https://images.unsplash.com/photo-1559521783-1d1599583485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'/>
                <Card.Body>
                    <Card.Title><a href='yelpcampsutinah.herokuapp.com'>YelpCamp</a></Card.Title>
                    <Card.Text>Web app for recommending campsite locations</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'><span>HTML</span> <span>CSS</span> <span>JavaScript</span></Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img height='178px' variant='top' src={showcase}></Card.Img>
                <Card.Body>
                    <Card.Title><a href='https://devconnectorsutinah.herokuapp.com/'>Dev Connector</a></Card.Title>
                    <Card.Text>MERN stack social network app for developers</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'><span>HTML</span> <span>CSS</span> <span>JavaScript</span></Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img height='178px' variant='top' src='https://images.unsplash.com/photo-1608359498106-e4a57b9532b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'></Card.Img>
                <Card.Body>
                    <Card.Title>Final Year Project App</Card.Title>
                    <Card.Text>Web app that classifies species observations&apos; reliability</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'><span>Python</span> <span>R</span></Card.Footer>
            </Card>
            </Col>
            <Col>
            <Card>
                <Card.Img height='178px' variant='top' src='https://images.unsplash.com/photo-1608359498106-e4a57b9532b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'></Card.Img>
                <Card.Body>
                    <Card.Title>Movie Recommender</Card.Title>
                    <Card.Text>Currently in development</Card.Text>
                </Card.Body>
                <Card.Footer className='text-muted'><span>MongoDB</span> <span>Express</span> <span>ReactJS</span> <span>NodeJS</span></Card.Footer>
            </Card>
            </Col>
        </Slider>
    )
}

export default ProjectSlider
