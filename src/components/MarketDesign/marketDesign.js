import React from 'react';
import './marketDesign.css';

const Design = ({imgSrc,title,...props}) => {
    return(
      <div className="outline">
        <img className="designlogo" variant="none" src={imgSrc} />
        <p className="cardb">{title}</p>
      </div>
    )
}

export default Design;