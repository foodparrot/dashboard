import React from 'react';
import Marker from "./marker.svg";
import './outlet.css';


const Outlet = ({imgSrc,restaurant,area,...props}) => {
    return(

        <div>
            <div className="row down1">
                <div>
                   <img variant="none" src={imgSrc} />
                </div>
                <div className="pl-2">
                    <p className="restaurant det">{restaurant}</p>
                    <p className="area det">{area}</p>
                </div>
            </div>
            <div className="row down1">
                <div className="col loc">
                    <img className="icon" width={18} height={18} src={Marker} />
                    <p className="address" >2-15-2, Lalitha Nagar, Near Railway Station, Road no : 2, Secunderabad.</p>
                </div>
            </div>
        </div>
    )
}

export default Outlet;
