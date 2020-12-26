import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

const Navbar = () => {
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
        <header style={{ marginBottom: `1.5rem` }}>
            <nav>
                <Link to='/' style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
                </Link>
                <ul style={{ listStyle: `none`, float: `right`}}>
                    <ListLink to='/'>Home</ListLink>
                    <ListLink to='/about'>About</ListLink>
                    <ListLink to='/projects'>Projects</ListLink>
                    <ListLink to='/cv'>Resume</ListLink>
                    <ListLink to='/contact'>Contact</ListLink>
                </ul>
            </nav>
        </header>
        
    )
}

export default Navbar
