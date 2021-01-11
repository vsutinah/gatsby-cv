import React, { Fragment } from "react"
import Layout from '../components/Layout'
import Header from '../components/Header'
import Section from '../components/Section'
import Intro from '../components/Intro'
import About from '../components/About'
import ProjectSlider from '../components/ProjectSlider'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Resume from '../components/Resume'
import Fade from 'react-reveal/Fade'

export default function Home() {

  return (
    <Fragment>
      <Header/>
      <Layout>
        <Section id='intro'>
            <Intro />
        </Section>
        <Fade left>
        <Section id='about'>
          <h3>About Me</h3>
          <About />
        </Section>
        </Fade>
        <Section id='skills'>
          <Fade right>
            <h3>Skills</h3>
          </Fade>
          <Skills/>
        </Section>
        <Fade left>
        <Section id='projects'>
          <h3>My Projects</h3>
            <ProjectSlider/>
        </Section>
        </Fade>
        <Fade left>
        <Section id='education'>
          <h3>Education</h3>
          <Education />
        </Section>        
        </Fade>
        <Fade right>
        <Section id='resume'>
          <h3>Resume</h3>
          <Resume />
        </Section>
        </Fade>
        <Fade left >
        <Section id='contact'>
          <h3>Contact Me</h3>
          <Contact />  
        </Section>
        </Fade>
      </Layout>
    </Fragment>
  )
}