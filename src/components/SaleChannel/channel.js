import React from 'react';
import './channel.css';

const Channels = ({imgSrc,channelName,...props}) => {
    return(
      <div className="channel">
        <div>
           <img className="iconC" variant="none" src={imgSrc} />
        </div>
        <div>
           <p className="name1">{channelName}</p>
           <button className="connectbtn">Connect</button>
        </div>
      </div>
    )
}

export default Channels;