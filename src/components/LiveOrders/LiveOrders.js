import React from 'react'
import '../LiveOrders/LiveOrders.css';
import { BsSearch } from "react-icons/bs";
import Details from './Details';
import withSizes from 'react-sizes'
import Productoutput from './Productoutput';

function LiveOrders({...props}) {
  
    return (
        <div className="container-fluid " style={{ height: props.winHeight }}>
            <div className="row lvhead ord-outlet scroll-bar">
                <div className="col-2 col-md-2 ">
                    <button className="top-btns"><a href='#' >All(0)</a></button>
                </div>
                <div className="col-2 col-md-2  ">
                    <button className="top-btns"><a href='#'>New(0)</a></button>
                </div>
                <div className="col-3 col-md-2 ">
                    <button className="top-btns"><a href="#">In outlet(0)</a></button>
                </div>
                <div className="col-3 col-md-3">
                    <button className="top-btns"><a href='#'>In Route/Ready(0)</a></button>
                </div>
                <div className="col-2 col-md-3">
                    <button className="top-btns"><a href='#'>Delivered/Picked up</a></button>
                </div>
            </div>
            <div className="container-fluid big-container">
                <div className="row row-main-od">

                    <div className="col-12 col-md-4 vert-div">

                        <div className="row row-od1 class-bg">
                            <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid" />
                            <button className="button-od btn-order"><BsSearch /></button>
                        </div>
                    <Productoutput/>
                    <Productoutput/>
                    <button type="button" className="btn btn-lg btn-ref"><h5>Refresh</h5></button>
                    </div>
                    {/* right side details */}
                    {(props.winWidth < 768)?<></>:
                    <Details />}
                </div>
            </div>
        </div>
    )
}
const mapSizesToProps = ({ height,width }) => ({
    winHeight:height,
    winWidth:width,
  })
  export default withSizes(mapSizesToProps)(LiveOrders)