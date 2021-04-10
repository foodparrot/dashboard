import React from 'react'

function Parent(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Parent
