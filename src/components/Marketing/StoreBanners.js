import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {FiUpload} from 'react-icons/fi';
import {FiLink} from 'react-icons/fi';
import './StoreBanners.css';

function StoreBanner () {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="inner">
            <p className="name">Store Banners</p>
            <div className="row">
                <div className="col-12 col-md-5 store">
                    <div className="filterhead">
                        <p className="filter">FILTERS</p>
                    </div>
                    <div className="container nav navbar dropdown_cls">
                    <div className="row" style={{padding:'2% 0'}}>
                        <div className="col-12 edit1 dropdown">
                        <a href="#" class="dropdown-toggle anc-tag-d1 " data-toggle="dropdown">Editable</a>
                            <div class="dropdown-menu menu">
                            <a href="#" class="dropdown-item item" value="January">All</a>
                            <a href="#" class="dropdown-item item" value="February">Editable</a>
                            <a href="#" class="dropdown-item item" value="March">Non-Editable</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <button type="button" class="btn btn-primary newm" data-toggle="modal" data-target="#exampleModalCenter">Modal</button>
                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                      <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                         <div class="modal-header header1">
                           <button className="editablebtn">EDITABLE</button>
                           <svg width="0" height="0">
                               <linearGradient id="orange-gradient"  >
                                   <stop stopColor="#FF692E" offset="0%" />
                                   <stop stopColor="#FFC537" offset="100%" />
                               </linearGradient>
                           </svg>
                           <button type="button" className="updownload"  aria-label="Close">
                             <span aria-hidden="true"><FiUpload style={{ stroke: "url(#orange-gradient)", fontSize: '1.5rem', }} /></span>
                           </button>
                           <button type="button" className="updownload"  aria-label="Close">
                             <span aria-hidden="true"><FiDownload size={25} style={{ stroke: "url(#orange-gradient)" }} /></span>
                           </button>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                             <span aria-hidden="true"><AiOutlineCloseCircle /></span>
                           </button>
                         </div>
                         <div class="modal-body bodyContent">
                            <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                            <p className="buy">BUY FROM</p>
                            <p className="link">order.ofas.tech/bismillahrestaurant <FiLink size={25} style={{marginLeft: 10}} /></p>
                         </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default StoreBanner;