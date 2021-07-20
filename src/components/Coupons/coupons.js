import React from 'react';
import Share from "./share.svg";
import './coupons.css';

const Coupon = ({code,offer,...props}) => {
    return(
      <div className="border1">
          <div className="top">
            <p className="code1">{code}</p>
            <p className="offer">{offer}</p>
            <div className="times">
                <div className="t1 t2">
                    <p>TIMES USED</p>
                    <p className="t3">0</p>
                </div>
                <div className="t1">
                    <p>TIMES USED</p>
                    <p className="t3">₹0</p>
                </div>
            </div>
            <div className="sharecoupon">
                <p className="color"><img className="icon" width={24} height={24} src={Share} />Share Coupon</p>
            </div>
          </div>
      </div>
    )
}

export default Coupon;