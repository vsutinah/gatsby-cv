import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return (
        <div style={{ margin: `5rem auto`, maxWidth: 900}}>
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.array,
}

export default Layout
