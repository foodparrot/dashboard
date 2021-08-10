import React, { useState, useEffect } from 'react'
import '../LiveOrders/LiveOrders.css';
import { BsSearch } from "react-icons/bs";
import Details from './Details';
import withSizes from 'react-sizes'
import Productoutput from './Productoutput';
const DEF_NAV_HEIGHT = 80;
function LiveOrders({ ...props }) {
    const [navBarHeight, setNavBarHeight] = useState(DEF_NAV_HEIGHT);
    useEffect(() => {
        if (window && props.winHeight && window.document.getElementById('navLive')) {
            setNavBarHeight(window.document.getElementById('navLive').clientHeight || DEF_NAV_HEIGHT);
        }
        else {
            setNavBarHeight(DEF_NAV_HEIGHT);
        }
    }, [props.winWidth, props.winHeight])
    return (
        <div className="container-fluid " style={{ height: props.winHeight }}>
            <div id="navLive" className="row lvhead ord-outlet scroll-bar" style={{ maxHeight: "80px" }}>
                <div className="col-md-2 ">
                    <button className="top-btns">All(0)</button>
                </div>
                <div className="col-md-2  ">
                    <button className="top-btns">New(0)</button>
                </div>
                <div className="col-md-2 ">
                    <button className="top-btns">In outlet(0)</button>
                </div>
                <div className="col-md-3">
                    <button className="top-btns">In Route/Ready(0)</button>
                </div>
                <div className="col-md-3">
                    <button className="top-btns">Delivered/Picked up</button>
                </div>
            </div>
            <div className="container-fluid big-container">
                <div className="row row-main-od">
                    <div className="col-12 col-md-4 vert-div" style={{ height: (props.winHeight - navBarHeight) + "px", overflowY: "scroll" }}>

                        <div className="row row-od1 class-bg">
                            <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid" />
                            <button className="button-od btn-order"><BsSearch /></button>
                        </div>
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        <Productoutput />
                        {/* Desktop , Tablet Button */}

                        <button type="button" className="btn-ref p-0 pb-2 "><button className="btn btn-lg innerRef">Refresh</button></button>
                    </div>
                    <button type="button" className="btn-mobile-ref p-0 pb-2"><button className="btn btn-lg innerRef">Refresh</button></button>
                    {/* right side details */}
                    {(props.winWidth < 768) ? <></> :
                        <Details />}
                </div>
            </div>
        </div>
    )
}
const mapSizesToProps = ({ height, width }) => ({
    winHeight: height,
    winWidth: width,
})
export default withSizes(mapSizesToProps)(LiveOrders)