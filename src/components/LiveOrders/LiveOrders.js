import React, { useState, useEffect } from 'react'
import '../LiveOrders/LiveOrders.css';
import { BsSearch } from "react-icons/bs";
import Details from './Details';
import withSizes from 'react-sizes'
import Productoutput from './Productoutput';
import { useParams } from 'react-router-dom';
import OrderList from './OrderList';
const DEF_NAV_HEIGHT = 80;
function LiveOrders({ ...props }) {
    const [navBarHeight, setNavBarHeight] = useState(DEF_NAV_HEIGHT);
    const {oid} = useParams()
    useEffect(()=>{
        // alert(JSON.stringify(oid))
    },[oid])
    useEffect(() => {
        if (window && props.winHeight && window.document.getElementById('navLive')) {
            setNavBarHeight(window.document.getElementById('navLive').clientHeight || DEF_NAV_HEIGHT);
        }
        else {
            setNavBarHeight(DEF_NAV_HEIGHT);
        }
    }, [props.winWidth, props.winHeight])
    return (
        <div className="container-fluid " style={{ height: props.winHeight , overflow:"hidden"}}>
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
                    {/* mobile oid==undefined show orders list else details, back btn */}
                 
                    {/* left side details */}
                    <OrderList navBarHeight={navBarHeight} winHeight={props.winHeight}/>
                    {/* right side details */}
                    {/* props.winWidth < 768 */}
                    {(typeof oid==='undefined'|| props.winWidth < 768)?<></> :
                        <Details  navBarHeight={navBarHeight} winHeight={props.winHeight}/> }
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