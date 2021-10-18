import React, { useEffect ,useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductReport from './ProductReport';
import * as Icon from "react-icons/fi";
import Checkbox from 'react-custom-checkbox';
function Details({ navBarHeight, winHeight }) {
    const checkBoxRef = useRef();
    const [itemCheck, setItemCheck] = useState(true);
    const { oid } = useParams();
    const handleCheckBox = (v) => {
        setItemCheck(v);
        const parent = window.$(checkBoxRef.current).parent();
        if (!v) {
          const wrongIcon = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>`;
          window.$(checkBoxRef.current).before(wrongIcon);
        } else {
          parent.find("svg").remove();
        }
      };
    useEffect(() => {
    }, [oid])
    return (

        <div id="right-cont" className=" col-12 col-md-7 right-container" style={{ height: (winHeight - navBarHeight) + "px", overflowY: "scroll" }}>
            <div className="container">
                <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Order#12345 {oid}</div>
                    <div style={{display:"flex",paddingRight:"2px",paddingTop:"2px"}}>
                    <Checkbox
                            checked={true}
                            borderColor="green"

                            borderRadius={20}
                            style={{ overflow: "hidden",backgroundColor:"green" }}
                            containerClassName="liveItemCheckContainer"
                            className="liveItemCheckBox"
                            reference={checkBoxRef}
                            onChange={()=>{}}
                            size={20}
                            disabled={true}
                        
                            icon={
                                <>
                                    {/* <IoCloseSharp/> */}
                                    <Icon.FiCheck style={{color:"white"}}/>
                                </>
                            }
                        />
                        &ensp;Accepted</div>
                </div>
                <div className="row" style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Today,10:45</div>
                    <div style={{display:"flex"}}>
                    <Checkbox
                            checked={true}
                            // backgroundColor="red"
                            borderColor="red"
                            borderRadius={20}
                            style={{ overflow: "hidden",backgroundColor:"red" }}
                            containerClassName="liveItemCheckContainer"
                            className="liveItemCheckBox"
                            reference={checkBoxRef}
                            disabled={true}
                            size={20}
                            icon={
                                <>
                                    {/* Rejected */}
                                    <svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path></svg>
                                </>
                            }
                        />
                        &ensp;Rejected&ensp;</div>
                </div>
                <div class="row pt-2">
                    <div className="col-1">
                        <Checkbox
                            checked={itemCheck}
                            icon={
                                <div
                                    style={{
                                        display: "flex",
                                        flex: 1,
                                        backgroundColor: "#174A41",
                                        alignSelf: "stretch",
                                    }}
                                >
                                    <Icon.FiCheck color="green" size={18} />
                                </div>
                            }
                            borderColor="#174A41"
                            // borderWidth={0}
                            borderRadius={20}
                            style={{ overflow: "hidden" }}
                            containerClassName="liveItemCheckContainer"
                            className="liveItemCheckBox"
                            reference={checkBoxRef}
                            onChange={handleCheckBox}
                            size={20}
                            icon={
                                <>
                                    {/* <IoCloseSharp/> */}
                                    <Icon.FiCheck />
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
            {/*item image and quantity*/}
            <div className="container">
                <ProductReport />
                <ProductReport />
                <ProductReport />
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
            <div className="details-buttons mb-2">
                {/* <button type="button" className="btn btn-lg   btn-danger  btn-rej"><h5>Reject</h5></button> */}
                {/* <button type="button" className="btn btn-lg   btn-success  btn-suc"><h5>Accept</h5></button> */}
                <button type="button" className="p-0 pb-3"><button className="btn btn-lg btn-danger  btn-rej">Reject</button></button>
                <button type="button" className="p-0 pb-3"><button className="btn btn-lg btn-success  btn-suc">Accept</button></button>
            </div>
        </div>






    )

}
export default Details