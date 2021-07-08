import React from 'react';
import './Marketing.css';

function Marketing() {
    return(
       <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
            <div className="content">
                <div className="row">
                 <div className="col-12 col-md-5 outer">
                  <div className="row down">
                    <div>
                      <img variant="none" src='\images\marketing1.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Marketing Designs</p>
                    </div>
                  </div>
                 </div>
                 <div className="col-12 col-md-5 outer">
                  <div className="row down">
                    <div>
                      <img variant="none" src='\images\marketing2.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Discount Coupons</p>
                    </div>
                  </div>
                 </div>
                </div>
                <div className="row">
                 <div className="col-12 col-md-5 outer">
                  <div className="row down">
                    <div>
                      <img variant="none" src='\images\marketing3.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Store QR Code</p>
                    </div>
                  </div>
                 </div>
                 <div className="col-12 col-md-5 outer">
                  <div className="row down">
                    <div>
                      <img variant="none" src='\images\marketing4.jpg' />
                    </div>
                    <div className=".head">
                      <p className="marketing">Sales Channels</p>
                    </div>
                  </div>
                 </div>
                </div>
            </div>
          </div>
       </div>
    );
}

export default Marketing;