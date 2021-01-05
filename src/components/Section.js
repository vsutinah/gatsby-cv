import React from 'react'
import PropTypes from 'prop-types'

const Section = ({ id, children }) => {
    return (
        <div id={ id } style={{ marginBottom: `3rem`, textAlign: `center` }}>
            { children }
        </div>
    )
}

Section.propTypes = {
    id: PropTypes.string,
    children: PropTypes.element,
}

export default Section
