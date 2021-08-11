import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ProductReport from './ProductReport';


function Details({ navBarHeight, winHeight }) {
    const { oid } = useParams();
    useEffect(() => {
    }, [oid])
    return (

        <div id="right-cont" className=" col-12 col-md-7 right-container" style={{ height: (winHeight - navBarHeight) + "px", overflowY: "scroll" }}>
            <div className="container">
                <div className="row">Order#12345 {oid}</div>
                <div className="row">Today,10:45</div>
            </div>
            {/*item image and quantity*/}
            <div className="container">
                <ProductReport/>
                <ProductReport/>
                <ProductReport/>
            </div>

            <div className="red-line"></div>
            {/*Item details*/}
            <div className="container">
                <div className="row row-itm-det1 row-det">
                    <div className="col-8 col-md-9 col-lg-10 p-0">Item total</div>
                    <div className="col-4 col-md-3 col-lg-2 p-0">2500000/-</div>
                </div>

                <div className="row row-itm-det2 row-det">
                    <div className="col-8 col-md-9 col-lg-10 p-0">Delivery</div>
                    <div className="col-4 col-md-3 col-lg-2 free p-0"><b>FREE</b></div>
                </div>

                <div className="row row-itm-det3 row-det">
                    <div className="col-8 col-md-9 col-lg-10 p-0">Grand Total</div>
                    <div className="col-4 col-md-3 col-lg-2 p-0">2500000/-</div>
                </div>
            </div>
            {/*customer details*/}
            <div className="red-line"></div>
            <div className="container">
                <div><b><i>CUSTOMER DETAILS</i></b></div>

                <div className="container cust-det">
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Name</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">Ram Mishra</div>
                    </div>
                    <div className="row row-cus-det2">
                        <div className="col-3 col-md-4">Mobile</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">6303065650</div>
                    </div>
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Address</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">23-6-236/9/A,Warangal</div>
                    </div>
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Pincode</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">506002</div>
                    </div>
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Payment</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">Cash on delivery</div>
                    </div>
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Outlet</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">Bismillah Outlet</div>
                    </div>
                    <div className="row row-cus-det1">
                        <div className="col-3 col-md-4">Order type</div>
                        <div className="col-2 col-md-2">:</div>
                        <div className="col-7 col-md-6">Pickup</div>
                    </div>
                </div>
            </div>

            {/*bottom right buttons*/}
            <div className="details-buttons">
                <button type="button" className="btn btn-lg   btn-danger  btn-rej"><h5>Reject</h5></button>
                <button type="button" className="btn btn-lg   btn-success  btn-suc"><h5>Accept</h5></button>
            </div>
        </div>






    )

}
export default Details