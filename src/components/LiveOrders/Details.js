import React from 'react'



function Details() {

return(
    
    <div id="right-cont" className=" col-12 col-md-7 right-container" >
    <div className="container">
    <div className="row">Order#12345</div>
    <div className="row">Today,10:45</div>
    </div>
{/*item image and quantity*/}
<div className="container">
    <div className="row badge-row">
        <div className="col-4 col-md-4  ">
        <img className="img-cls" src="https://s3.amazonaws.com/company-photo.theladders.com/2262/4dadaf63-837d-414e-ae95-edd81a72a486.png"></img></div>
    <div className="col-6  col-md-8">    
         <div className="d-flex" style={{flexWrap:'wrap', flexDirection:"column", justifyContent:"space-between"}}>
            <div>item 1</div>

            <div className="row m-0" style={{alignItems:"center", justifyContent:"space-between"}}>
                <span className="col-3 p-0" style={{minWidth: "max-content"}}><span class="badge badge-light">1</span>&ensp; X25000000</span>
                <span className="col-3 p-0" style={{fontWeight:"700"}}>2500000/-</span>
             </div>
         </div>
         </div>
    </div>
    </div>
     
    <div className="red-line"></div>
{/*Item details*/}
 <div className="container">
 <div className="row row-itm-det1 row-det">
     <div className="col-8 col-md-9 col-lg-10">Item total</div>
     <div className="col-4 col-md-3 col-lg-2">25000000/-</div>
 </div>

 <div className="row row-itm-det2 row-det">
 <div className="col-8 col-md-9 col-lg-10">Delivery</div>
     <div className="col-4 col-md-3 col-lg-2 free"><b>FREE</b></div>
 </div>

 <div className="row row-itm-det3 row-det">
 <div className="col-8 col-md-9 col-lg-10">Grand Total</div>
 <div className="col-4 col-md-3 col-lg-2">2500000/-</div>
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
<div  className="details-buttons">
<button type="button" className="btn btn-lg   btn-danger  btn-rej"><h5>Reject</h5></button>
<button type="button" className="btn btn-lg   btn-success  btn-suc"><h5>Accept</h5></button>
</div>
</div>

  
  
  
  
  
    )

}
export default  Details