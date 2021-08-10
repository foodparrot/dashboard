import React from 'react'
import './LiveOrders.css'
import { Link } from "react-router-dom";
function Productoutput() {
    return (
        <div className="row row-red class-bg">
            <div className="container cont-red">
                <div className="row row-order-det1 ">
                    <div className="col-6 col-md-6">Order#12345</div>
                    <div className="col-6 col-md-6">Apr 09,21</div>
                </div>
                <div className="row row-order-det2">
                    <div className="col-6 col-md-6">3min ago</div>
                    <div className="col-6 col-md-6"><Link to={"../Details/Details"}><button className="details">Details</button></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Productoutput
