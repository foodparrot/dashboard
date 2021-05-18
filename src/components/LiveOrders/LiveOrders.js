import React from 'react'
import '../LiveOrders/LiveOrders.css';
import { BsSearch } from "react-icons/bs";
import {Link } from "react-router-dom";

function LiveOrders() {
    return (
        <div className="container-fluid " style={{height: "-webkit-fill-available"}}>
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
             {/*
                            <table class="table   lvhead ord-outlet ">
                                <thead className="tab-head">
                                    <tr>
                                    <th scope="col">All(0)</th>
                                    <th scope="col">New(0)</th>
                                    <th scope="col">In outlet(0)</th>
                                    <th scope="col">In Route/Ready(0)</th>
                                    <th scope="col">Delivered/Picked up</th>
                                    </tr>
                                </thead></table>*/}
            <div className="container-fluid big-container" style={{height: "-webkit-fill-available"}}>
                <div className="row row-main-od" style={{height: "-webkit-fill-available"}}>

                    <div className="col-12 col-md-4 vert-div">

                    <div className="row row-od1 class-bg">
                    <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid"/>
                    <button className="button-od btn-order"><BsSearch/></button>
                    </div>

                    <div className="row row-red class-bg">
                        <div className="container cont-red">
                        <div className="row row-order-det1 ">
                            <div className="col-6 col-md-6">Order#12345</div>
                            <div className="col-6 col-md-6">Apr 09,21</div>
                        </div>
                        <div className="row row-order-det2">
                            <div className="col-6 col-md-6">3min ago</div>
                            <div className="col-6 col-md-6"><Link to={"../Details/Details"}><button className="details details-red">Details</button></Link></div>
                        </div>
                       </div>
                    </div>

                    <div className="row row-org class-bg">
                        <div className="container cont-org">
                        <div className="row row-order-det1 ">
                            <div className="col-6 col-md-6">Order#12345</div>
                            <div className="col-6 col-md-6">Apr 09,21</div>
                        </div>
                        <div className="row row-order-det2">
                            <div className="col-6 col-md-6">3min ago</div>
                            <div className="col-6 col-md-6"><Link to={"../Details/Details"}><button className="details details-org">Details</button></Link></div>
                        </div>
                       </div>
                    </div>
                    <button type="button" className="btn btn-lg btn-block btn-lv btn-ref"><h5>Refresh</h5></button>
                  

{/*below search bar row*/} </div>
                   


                       <div id="right-cont" className=" col-12 col-md-7 right-container d-none d-sm-block" >
                           <div className="container">
                           <div className="row order-big"><b>Order#12345</b></div>
                           <div className="row">Today,10:45</div>
                           </div>
            {/*item image and quantity*/}
                   <div className="container">
                           <div className="row badge-row">
                               <div className="col-6 col-md-2  img-cls">
                               <img src="#" alt="img"/></div>

                            <div className="col-6  col-md-6">    
                                <div className="container">
                                   <div className="row row-right-item">item 1</div></div>

                                   <div className="row row-right-no-of-item">
                                       <div className="col-8 col-md-10"><span class="badge badge-light">1</span>X250</div>
                                       <div className="col-4  col-md-2 amt">250/-</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            
               {/*Item details*/}
                        <div className="container">
                        <div className="bill-det-head"><b>Bill</b></div>
                            <div className="red-line"></div>
                        <div className="row row-itm-det1 row-det">
                            <div className="col-7 col-md-11">Item total</div>
                            <div className="col-5 col-md-1">250/-</div>
                        </div>

                        <div className="row row-itm-det2 row-det">
                        <div className="col-8 col-md-11">Delivery</div>
                            <div className="col-4 col-md-1 free"><b>FREE</b></div>
                        </div>

                        <div className="row row-itm-det3 row-det">
                        <div className="col-8 col-md-11">Grand Total</div>
                        <div className="col-4 col-md-1">250/-</div>
                        </div>
                        </div>
               {/*customer details*/}
               <div className="container">
                          <div className="bill-det-head"><b>Customer Details</b></div>
                          <div className="red-line"></div>
                           <div className="container cust-det">
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Name</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">Ram Mishra</div>
                          </div>
                          <div className="row row-cus-det2">
                              <div className="col-3 col-md-4"><b>Mobile</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">6303065650</div>
                          </div>
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Address</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">23-6-236/9/A,Warangal</div>
                          </div>
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Pincode</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">506002</div>
                          </div>
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Payment</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">Cash on delivery</div>
                          </div>
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Outlet</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">Bismillah Outlet</div>
                          </div>
                          <div className="row row-cus-det1">
                              <div className="col-3 col-md-4"><b>Order type</b></div>
                              <div className="col-2 col-md-2">:</div>
                              <div className="col-7 col-md-6">Pickup</div>
                          </div>
                    </div>
                </div>
                
         {/*bottom right buttons*/}
              <div  className="row">
              <div className="col-6 col-md-6">
                  <button type="button" className="btn btn-lg  btn-block btn-danger btn-lv btn-rej"><h5>Reject</h5></button>
                  </div>
                  <div className="col-6 col-md-6">
                  <button type="button" className="btn btn-lg  btn-block btn-success btn-lv btn-suc"><h5>Accept</h5></button>
                  </div>
              </div>
              </div>



           
        </div>
    </div>


  <script src="../Details/Details"></script>

    {/*end div*/}
        </div>
    )
}

export default LiveOrders