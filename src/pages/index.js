import React, { Fragment } from "react"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <div id='intro'>
          <h1>Hi! My name is Vincent Sutinah!</h1>
          <p>I&apos;m a fresh Computer Science graduate looking for opportunities that will allow me to gain experience as a developer.</p>
          <p>I will be updating this website with more content, so stay tuned!</p>
        </div>
        <div id='about'>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, alias.</p>
        </div>
        <div id='skills'>
          <h1>Skills</h1>
          <ul>
            <li>React</li>  
            <li>NodeJS</li>
            <li>Django</li>
            <li>Python</li>
          </ul>
        </div>
        <div id='education'>
          <h1>Education</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, corporis?</p>
        </div>
        <div id='projects'>
          <h1>My Projects</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, autem?</p>
        </div>
        <div id='resume'>
          <h1>Resume</h1>
          <p>Feel free to download my resume by clicking the button below!</p>
        </div>
        <div id='contact'>
          <h1>Contact Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, minima.</p>
        </div>
      </Layout>
    </Fragment>
  )
}
