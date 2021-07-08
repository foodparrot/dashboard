import React from 'react';
import Marker from "./marker.svg";
import './outlet.css';


const Outlet = ({imgSrc,restaurant,area,...props}) => {
    return(


        <div>
            <div className="row down">
                <div>
                   <img variant="none" src={imgSrc} />
                </div>
                <div className="details">
                    <p className="restaurant det">{restaurant}</p>
                    <p className="area det">{area}</p>
                </div>
            </div>
            <div className="row down">
                <div className="col loc">
                    <img className="icon" width={18} height={22} src={Marker} />
                    <p className="address" >2-15-2, Lalitha Nagar, Near Railway Station, Road no : 2, Secunderabad.</p>
                </div>
            </div>
        </div>
    )
}

export default Outlet;
