import React from 'react'
import Navbar from '../components/Navbar'

const Layout = ({ children }) => {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 600}}>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout
