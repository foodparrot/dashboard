import React from 'react';
import './createCoupon.css';
import Cross from "./x-circle.svg";

function CreateCoupon() {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
            <div className="head">
                <p className="head1">Create Coupon</p>
                <div className="row inside">
                  <div className="col-12 col-md-5">
                    <label className="code">Enter Coupon Code*</label>
                    <input type="text" name="coupon_code" id="coupon_code"/>
                  </div>
                  <div className="col-12 col-md-5">
                    <button className="button">Generate</button>
                  </div>
                </div>
            </div>
            <div className="head">
                <p className="head1">Application</p>
                <div className="application">
                  <form>
                   <div>
                    <input type="radio" id="automatic" name="application_name" value="automatic" />
                    <label className="code2" for="automatic">Automatic</label>
                    <p className="description">Will be automatically applied upon checkout. Customers can remove the code if they wish</p>
                   </div>
                   <div>
                    <input type="radio" id="manual" name="application_name" value="manual" checked />
                    <label className="code2 color" for="manual">Manual</label>
                    <p className="description">Will be displayed on the ordering menu, customers will have to select it if they wish to use it</p>
                   </div>
                   <div>
                    <input type="radio" id="hidden_code" name="application_name" value="hidden_code" />
                    <label className="code2" for="hidden_code">Hidden Code</label>
                    <p className="description">won’t be displayed on the ordering menu, and customers will type the code at the checkout</p>
                   </div>
                  </form>
                </div>
            </div>
            <div className="head">
                <p className="head1">Order type </p>
                <div className="application">
                 <form>
                   <div className="ordertype">
                    <input type="checkbox" id="pickup" name="order_type" value="pickup" checked/>
                    <label className="code2 color" for="pickup">Pickup</label>
                   </div>
                   <div className="ordertype">
                    <input type="checkbox" id="delivery" name="order_type" value="delivery" checked/>
                    <label className="code2 color" for="delivery">Delivery</label>
                   </div>
                   <div className="ordertype">
                    <input type="checkbox" id="dine-in" name="order_type" value="dine-in" />
                    <label className="code2" for="dine-in">Dine-in</label>
                   </div>
                 </form>
                </div>
            </div>
            <div className="head">
                 <p className="head1">Outlets</p>
                 <div className="application">
                  <div className="row type">
                    <div className="col-12 col-md-3 out">
                     <input type="radio" />
                     <label className="code2">All outlets</label>
                    </div>
                    <div className="col-12 col-md-3 out">
                     <input type="radio" checked />
                     <label className="code2 color" for="flat_discount">Selected outlets</label>
                    </div>
                  </div>
                  <div className="uses2">
                  <img className="icon" width={5} height={5} src={Cross} />
                   <div style={{marginBottom: 10}}>
                    <input type="checkbox" checked/>
                    <label className="code3 color">Azhar’s Restaurant</label>
                   </div>
                   <div style={{marginBottom: 10}}>
                    <input type="checkbox" checked/>
                    <label className="code3 color">Azhar’s 2nd Restaurant</label>
                   </div>
                   <div>
                    <input type="checkbox" />
                    <label className="code3">abccc</label>
                   </div>
                  </div>
                 </div>
            </div>
            <div className="head">
                 <p className="head1">Discount Type</p>
                 <div className="application">
                   <div className="row type">
                    <div className="col-12 col-md-3 out">
                     <input type="radio" id="percentage" name="discount_type" value="percentage" checked/>
                     <label className="code2 color" for="percentage">Percentage</label>
                    </div>
                    <div className="col-12 col-md-3 out">
                     <input type="radio" id="flat_discount" name="discount_type" value="flat_discount" />
                     <label className="code2" for="flat_discount">Flat discount</label>
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-5 out">
                      <label className="code">Enter Coupon Code*</label>
                      <input className="discount" type="text" id="percentage" name="discount_percentage" placeholder="Enter percentage" />
                    </div>
                    <div className="col-12 col-md-5 out">
                      <label className="code">Minimum order value*</label>
                      <input className="discount" type="text" id="order_value" name="order_value" placeholder="₹ Enter value" />
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-5 out">
                      <label className="code">Maximum discount*</label>
                      <input className="discount" type="text" id="max_discount" name="maximum_discount" placeholder="₹ Enter value" />
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-5 out">
                      <label className="code">Maximum number of uses per customer</label>
                      <input className="discount uses color2" type="text" />
                    </div>
                   </div>
                 </div>
            </div>
            <div className="head">
                 <p className="head1">Availability</p>
                 <div className="application">
                   <div className="row type">
                    <div className="col-12 col-md-4 out">
                     <label className="code">Start date*</label>
                     <input type='Date' className="date uses" placeholder='Date' value="2021-06-11" />
                    </div>
                    <div className="col-12 col-md-4 out">
                      <label className="code" for="time">Start time*</label>
                      <div>
                      <select id="Select" className="date" placeholder="00:00">
                        <option selected>00:00</option>
                        <option>Sample2</option>
                      </select>
                      </div>
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-4 out">
                     <input type="radio" checked/>
                     <label className="code2 color">Expires on a specific date</label>
                    </div>
                    <div className="col-12 col-md-4 out">
                     <input type="radio" />
                     <label className="code2" >Never expires</label>
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-4 out">
                     <label className="code">End date*</label>
                     <input type='Date' className="date uses" placeholder='Date' value="2021-06-25"></input>
                    </div>
                    <div className="col-12 col-md-4 out">
                      <label className="code" for="time">End time*</label>
                      <select id="Select" className="date uses" >
                        <option selected>23:59</option>
                        <option>Sample2</option>
                      </select>
                    </div>
                   </div>
                   <div className="row type">
                    <div className="col-12 col-md-5 out">
                      <label className="code">Total number of users</label>
                      <input className="discount uses" type="text" value="100"/>
                    </div>
                   </div>
                   <div className="row ">
                     <button className="button create">Create</button>
                   </div>
                 </div>
            </div>
          </div>
        </div>
    );
}

export default CreateCoupon;