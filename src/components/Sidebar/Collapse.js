import React, { useState, useEffect } from 'react'
import { IoChevronBackCircleSharp, IoChevronForwardCircleSharp } from 'react-icons/io5';
function Collapse({collapseSidebar, onCollapseHandler}) {

    return (
        <>
            {collapseSidebar ?  
                <IoChevronForwardCircleSharp className="collapse-toggle" style={{
                    left: "46px"
                }} onClick={onCollapseHandler}/>
                :
                <IoChevronBackCircleSharp className="collapse-toggle" style={{
                    left: "200px"
                }} onClick={onCollapseHandler}/> 
        }
        </>
    )
}

export default Collapse
