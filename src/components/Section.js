import React from 'react'

const Section = ({ id, children }) => {
    return (
        <div id={ id } style={{ textAlign: `center` }}>
            { children }
        </div>
    )
}

export default Section
