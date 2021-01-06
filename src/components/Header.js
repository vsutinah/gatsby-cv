import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import { scroller } from 'react-scroll'

const Header = () => {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="mb-5">
                <Navbar.Brand 
                style={{ fontSize: `2rem` }} 
                href="#intro" 
                className='ml-5'
                onClick={() => scroller.scrollTo('intro', {
                    smooth: true,
                    offset: -70,
                    duration: 400
                })}>{data.site.siteMetadata.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-3">
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('about', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#about'>About
                    </Nav.Link>
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('skills', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#skills'>Skills
                    </Nav.Link> 
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('education', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#education'>Education
                    </Nav.Link> 
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('projects', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#projects'>Projects
                    </Nav.Link>  
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('resume', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#resume'>Resume
                    </Nav.Link>
                    <Nav.Link 
                    onSelect={() => scroller.scrollTo('contact', {
                        smooth: true,
                        offset: -70,
                        duration: 400
                    })}
                    href='#contact'>Contact Me
                    </Nav.Link>             
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        
    )
}

export default Header


