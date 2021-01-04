import React from 'react'

const Layout = ({ children }) => {
    return (
        <div style={{ margin: `3rem auto`, maxWidth: 900}}>
            {children}
        </div>
    )
}

export default Layout
