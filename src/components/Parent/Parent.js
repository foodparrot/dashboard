import React from 'react'
import './Parent.css';
function Parent(props) {
    return (
        <div id="rootParentComponent">
            {props.children}
        </div>
    )
}

export default Parent
