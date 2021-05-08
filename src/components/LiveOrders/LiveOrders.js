import React from 'react'
import '../LiveOrders/LiveOrders.css';
import { BsSearch } from "react-icons/bs";

function LiveOrders() {
    return (
        <div className="container-fluid ">
            <div className="row lvhead ">
                    <div className="col-4 col-md-2 line">
                     All(0)
                     </div>   
                     <div className="col-4 col-md-2 line ">
                     New(0)
                     </div>   
                     <div className="col-4 col-md-2 line">
                     In outlet(0)
                     </div>   
                     <div className="col-6 col-md-3">
                    In Route/Ready(0)
                     </div>     
                     <div className="col-4 col-md-2">
                     Delivered/Picked up
                     </div>                             
                    </div>
            <div className="container-fluid big-container">
                <div className="row row-main-od">

                    <div className="col-12 col-md-4 vert-div">

                    <div className="row row-od1">
                    <input type="search" placeholder="Search by order id..." aria-describedby="button-od" className="s-byid"/>
                    <button className="button-od btn-order"><BsSearch/></button>
                    </div>

                    <div className="row row-red">
                        <div className="container cont-red">
                        <div className="row row-order-det1">
                            <div className="col-6 col-md-6">Order#12345</div>
                            <div className="col-6 col-md-6">Apr 09,21</div>
                        </div>
                        <div className="row row-order-det2">
                            <div className="col-6 col-md-6">3min ago</div>
                            <div className="col-6 col-md-6"><button className="details details-red">Details</button></div>
                        </div>
                       </div>
                    </div>

                    <div className="row row-org">
                        <div className="container cont-org">
                        <div className="row row-order-det1">
                            <div className="col-6 col-md-6">Order#12345</div>
                            <div className="col-6 col-md-6">Apr 09,21</div>
                        </div>
                        <div className="row row-order-det2">
                            <div className="col-6 col-md-6">3min ago</div>
                            <div className="col-6 col-md-6"><button className="details details-org">Details</button></div>
                        </div>
                       </div>
                    </div>
                    <button type="button" className="btn btn-lg btn-block btn-lv btn-ref"><h5>Refresh</h5></button>
                  

{/*below search bar row*/} </div>
                   


                       <div className="col-12 col-md-7 right-container">
                           <div className="container">
                           <div className="row">Order#12345</div>
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
                            
                            <div className="red-line"></div>
               {/*Item details*/}
                        <div className="container">
                        <div className="row row-itm-det1 row-det">
                            <div className="col-8 col-md-11">Item total</div>
                            <div className="col-4 col-md-1">250/-</div>
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





















                    
            
            




















    {/*end div*/}
        </div>
    )
}

export default LiveOrders
