import React from 'react'
import { BsSearch } from "react-icons/bs";
import Productoutput from './Productoutput'
function OrderList({ navBarHeight, winHeight }) {
    return (
        <>
            <div className="col-12 col-md-4 vert-div" style={{ height: (winHeight - navBarHeight) + "px", overflowY: "scroll" }}>

                <div className="row row-od1 class-bg" style={{position:"sticky",top:"0",zIndex:"1000",border:"1px solid gray",borderRadius:"5px"}}>
                    <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid" />
                    <button className="button-od btn-order"><BsSearch /></button>
                </div>
                {['113', '123', '143', '103', '107'].map(url => <Productoutput url={url}/>)}
                {/* Desktop , Tablet Button */}

                <button type="button" className="btn-ref p-0 pb-2 "><button className="btn btn-lg innerRef">Refresh</button></button>
            </div>
            <button type="button" className="btn-mobile-ref p-0 pb-2"><button className="btn btn-lg innerRef">Refresh</button></button>
        </>
    )
}

export default OrderList
