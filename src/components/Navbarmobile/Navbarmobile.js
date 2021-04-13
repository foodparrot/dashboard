import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import './NavbarMobile.css';
function Navbarmobile(props) {
    
    return (
        <div {...props} style={{height:"58px",position:"fixed",width:"100%",alignItems: "center",
        justifyContent: "space-between",background:"linear-gradient(1deg, #cde548, rgba(31, 186, 29, 1))"}}>
            <nav className="navbar d-flex">
                {/* #1fba1d26 */}
            <span><img style={{width:"220px"}}src="/images/mainlogo.svg"/></span>
            <span >
                {
                    props.mobileCollapseSidebar ? 
                    < CgClose id="navBarClose" style={{color:"black",fontSize:"1.6em"}} onClick={props.onMobileCollapseHandler}/>
                    
                        :
                    < GiHamburgerMenu id="navBarMenu" style={{color:"black",fontSize:"2em"}} onClick={props.onMobileCollapseHandler}/>
                }
            </span>
                
            </nav>
        </div>
    
    )
}

export default Navbarmobile
