import React from 'react'

function Option(props) {
    return (
        <li {...props}>{props.children}</li>
    )
}

export default Option
