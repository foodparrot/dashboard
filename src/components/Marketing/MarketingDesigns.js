import React from 'react';
import './MarketingDesigns.css';
import Design from '../MarketDesign/marketDesign';

function MarketingDesign () {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
              <p className="name">Marketing Designs</p>
                <div className="row around">
                  <div className="col-12 col-md-3 around1">
                      <Design imgSrc='\images\business_card.png' title="Business Cards" />
                  </div>
                  <div className="col-12 col-md-3 around1">
                      <Design imgSrc='\images\store_banner.png' title="Store Banners"/>
                  </div>
                  <div className="col-12 col-md-3 around1">
                      <Design imgSrc='\images\whatsapp_stories.png' title="WhatsApp Stories"/>
                  </div>
                </div>
          </div>
        </div>
    )
}

export default MarketingDesign;