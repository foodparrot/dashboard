import React from 'react';
import './Marketing.css';
import { Link } from "react-router-dom";

function Marketing() {
    return(
       <div>
          <p className="heading">Bismillah Restaurant</p>
          <div className="inner">
            <div className="content">
                <div className="row">
                 <div className="col-12 col-md-5 outer">
                  <Link to={"/marketingdesigns"} className="btn"><button className="row down">
                    <div>
                      <img className="image" variant="none" src='\images\marketing1.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Marketing Designs</p>
                    </div>
                  </button></Link>
                 </div>
                 <div className="col-12 col-md-5 outer">
                  <Link to={"/discountcoupons"} className="btn"><button className="row down">
                    <div>
                      <img className="image" variant="none" src='\images\marketing2.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Discount Coupons</p>
                    </div>
                  </button></Link>
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-md-5 outer">
                 <Link to={"/storeQRCode"} className="btn"><button className="row down">
                    <div>
                      <img className="image" variant="none" src='\images\marketing3.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Store QR Code</p>
                    </div>
                  </button></Link>
                 </div>
                 <div className="col-12 col-md-5 outer">
                  <Link to={"/saleschannels"} className="btn"><button className="row down">
                    <div>
                      <img className="image" variant="none" src='\images\marketing4.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Sales Channels</p>
                    </div>
                  </button></Link>
                 </div>
                </div>
            </div>
          </div>
       </div>
    );
}

export default Marketing;