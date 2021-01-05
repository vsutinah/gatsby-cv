import React, { Fragment } from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import Section from '../components/Section'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import { Container, Row, Col } from 'react-bootstrap'
import html5 from '../imgs/html5.png';
import css from '../imgs/css.png';
import javascript from '../imgs/javascript.png';
import node from '../imgs/nodejs.png';
import python from '../imgs/python.png';
import rprogramming from '../imgs/rprogramming.png';
import tableau from '../imgs/tableau.png';

export default function Home() {
  return (
    <Fragment>
      <Header/>
      <Layout>
        <Fade left>
        <Section id='intro'>
          <h1>Hi! My name is Vincent Sutinah!</h1>
          <p>I&apos;m a Computer Science graduate looking for opportunities that will allow me to gain experience as a developer.</p>
          <p>I will be updating this website with more content, so stay tuned!</p>
        </Section>
        </Fade>
        <Fade right>
        <Section id='about'>
          <h1>About Me</h1>
            <p>Data science was something I&apos;ve heard in various conversations regarding the IT industry. Having the power to predict results, optimize processes and automate tasks piqued my interest. What made me jump into the rabbit hole were the potential applications that it has to improve our lifestyle.</p>

            <p>I have recently graduated with a Distinction average, and with it, I&apos;ve managed to accomplish various things. From understanding and training different machine learning models, to analysing large datasets 
            and visualising them to offer innovative ideas, I have culminated the results of my 3-year learning with the development of a web app that applies all of the knowledge and skills I have obtained from learning about data science.</p>

            <p>Whilst learning more about data science, I have also dabbled in web and software development, which led me to design and develop simple web apps, both alone and with colleagues I&apos;ve met. It also led me to discover that my true passion lies mainly in coding, development and designing apps.</p>

            <p>As such, I have decided to look for opportunities that would grant me industry experience to develop and maintain scalable apps. While doing so, I continue to work on my side projects that focus on using NodeJS and React to further hone my skills.</p>
        </Section>
        </Fade>
        <Fade left>
        <Section id='skills'>
          <h1>Skills</h1>
          <Container fluid>
            <Zoom >
              <Row>
                <Col><img src={html5} alt="HTML5"/></Col>
                <Col><img src={css} alt="CSS"/></Col>
                <Col><img src={javascript} alt="JavaScript"/></Col>
                <Col><img src={node} alt="Node JS"/></Col>
              </Row>
            </Zoom>
            <Zoom >
              <Row>
                <Col><img src={python} alt="Python"/></Col>
                <Col><img src={rprogramming} alt="R Programming"/></Col>
                <Col><img src={tableau} alt="Tableau"/></Col>
              </Row>
            </Zoom>
          </Container>
        </Section>
        </Fade>
        <Fade right>
        <Section id='education'>
          <h1>Education</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?</p>
        </Section>
        </Fade>
        <Fade left>
        <Section id='projects'>
          <h1>My Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem?</p>
        </Section>
        </Fade>
        <Fade right>
        <Section id='resume'>
          <h1>Resume</h1>
          <p>Feel free to download my resume by clicking the button below!</p>
        </Section>
        </Fade>
        <Fade left >
        <Section id='contact'>
          <h1>Contact Me</h1>
            <h5>I&apos;d love to talk! Email me at the address below:</h5>
            <p>
                <a href="vincentsutinah@gmail.com">vincentsutinah@gmail.com</a>
            </p>
            <h5>You can also view my online profiles here:</h5>
            <p>
                <a href="https://www.linkedin.com/in/vincentsutinah/">
                    LinkedIn
                </a>
            </p>
            <p>
                <a href="https://github.com/vsutinah/">
                    GitHub
                </a>
            </p>
        </Section>
        </Fade>
      </Layout>
    </Fragment>
  )
}
