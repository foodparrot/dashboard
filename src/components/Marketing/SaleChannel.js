import React from 'react';
import './SaleChannel.css';
import Channels from '../SaleChannel/channel';

function Channel() {
    return(
        <div>
          <p className="heading">Bismillah Restaurant</p>
          <div className="inner">
            <p className="name">Marketing/Sales Channels</p>
            <div className="channels">
              <div className="row">
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\whatsapp.jpg' channelName="WhatsApp" />
                </div>
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\google.svg' channelName="Google My Business"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\instagram.jpg' channelName="Instagram"/>
                </div>
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\facebook.jpg' channelName="Facebook"/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\logo.jpg' channelName="Website Ordering"/>
                </div>
                <div className="col-12 col-md-5 source">
                  <Channels imgSrc='\images\telegram.jpg' channelName="Telegram"/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Channel;