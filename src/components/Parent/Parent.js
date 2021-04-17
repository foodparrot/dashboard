import React from 'react'
import './Parent.css';
import withSizes from 'react-sizes';
function Parent(props) {
    return (
        <div id="rootParentComponent" style={{height: `${props.winHeight}px`,overflowY:"scroll",width:"100%"}}>
            {props.children}
        </div>
    )
}
const mapSizesToProps = ({ height, width }) => ({
    winHeight: height,
    winWidth: width
})
export default withSizes(mapSizesToProps)(Parent)
