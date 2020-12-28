import React, { Fragment } from "react"
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Fragment>
      <Layout>
        <div>
        <h1>Hi! My name is Vincent!</h1>
        <p>I'm a fresh Computer Science graduate looking for opportunities that will allow me to gain experience as a developer.</p>
        <p>I will be updating this website with more content, so stay tuned!</p>
        </div>
        <div>
        <h1>Skills</h1>
        <ul>
        <li>React</li>
        <li>NodeJS</li>
        <li>Django</li>
        <li>Python</li>
        </ul>
        </div>
      </Layout>
    </Fragment>
  )
}
