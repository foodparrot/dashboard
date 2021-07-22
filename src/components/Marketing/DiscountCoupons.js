import React from 'react';
import { FiSearch } from 'react-icons/fi';
import './DiscountCoupons.css';
import Coupon from '../Coupons/coupons';
import { Link } from "react-router-dom";

function DiscountCoupons () {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
              <p className="name">Marketing/Discount Coupons</p>
              <div className="row inside1">
                <div className="col-12 col-md-5">
                   <FiSearch className="search1" /> <input className="input2" type="search" placeholder="Search Coupons"/>
                </div>
                <div className="col-12 col-md-5 btnc">
                   <Link to={"/createcoupon"} className="btn"><button className="button2">Create</button></Link>
                </div>
              </div>
              <div className="row inside2">
                <div className="col-12 col-md-5 inside3">
                  <Coupon code="QWERTY" offer="₹20 off on orders bove ₹200" />
                </div>
                <div className="col-12 col-md-5 inside3">
                  <Coupon code="AQZQWE" offer="10% off on all orders above ₹300 upto ₹200" />
                </div>
              </div>
          </div>
        </div>
    )
}

export default DiscountCoupons;