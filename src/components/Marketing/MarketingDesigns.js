import React from 'react';
import './MarketingDesigns.css';
import { Link } from "react-router-dom";
import Design from '../MarketDesign/marketDesign';

function MarketingDesign () {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
              <p className="name">Marketing Designs</p>
                <div className="row around">
                  <div className="col-12 col-md-3 around1">
                    <Link to={""} className="btn"><Design imgSrc='\images\business_card.png' title="Business Cards" /></Link>
                  </div>
                  <div className="col-12 col-md-3 around1">
                    <Link to={"/storebanners"} className="btn"><Design imgSrc='\images\store_banner.png' title="Store Banners"/></Link>
                  </div>
                  <div className="col-12 col-md-3 around1">
                    <Link to={"/whatsappstories"} className="btn"><Design imgSrc='\images\whatsapp_stories.png' title="WhatsApp Stories"/></Link>
                  </div>
                </div>
          </div>
        </div>
    )
}

export default MarketingDesign;