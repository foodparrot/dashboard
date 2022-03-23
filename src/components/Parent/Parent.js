import React from 'react'
import './Parent.css';
import withSizes from 'react-sizes';
function Parent(props) {
    return (
        <div id="rootParentComponent" style={{ height: `100vh`, overflowY: "auto", width: "100%", overflowX: "auto" }}>
            {props.children}
        </div>
    )
}
const mapSizesToProps = ({ height, width }) => ({
    winHeight: height,
    winWidth: width
})
export default withSizes(mapSizesToProps)(Parent)