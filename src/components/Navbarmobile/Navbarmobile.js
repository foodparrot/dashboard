import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
function Navbarmobile(props) {
    
    return (
        <div {...props} style={{height:"50px",position:"fixed",width:"100%",alignItems: "center",
        justifyContent: "space-between"}}>
            <nav className="navbar d-flex">
            <span><img style={{width:"220px"}}src="/images/mainlogo.svg"/></span>
            <span >< GiHamburgerMenu style={{color:"black",fontSize:"2em"}} onClick={props.onMobileCollapseHandler}/></span>
            </nav>
        </div>
    )
}

export default Navbarmobile
