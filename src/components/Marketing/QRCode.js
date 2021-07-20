import React from 'react';
import './QRCode.css';

function Store() {
    return(
        <div>
          <p className="heading">Bismillah Restaurant</p>
          <div className="inner">
            <p className="name">Marketing/Store QR Code</p>
            <div className="storeCode">
                <div className="QR">
                    <div className="insideCircle">
                        <p className="online">Order Online!</p>
                        <img className="storecode" variant="none" src="./images/QR.jpg" />
                        <p className="online1">Bismillah Restaurant</p>
                        <p className="online2">order.ofas.tech/bismillahrestaurant</p>
                        <img variant="none" src="./images/foodparrot.jpg" />
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Store;