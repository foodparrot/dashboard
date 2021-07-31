import React from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {FiDownload} from 'react-icons/fi';
import {FiUpload} from 'react-icons/fi';
import {FiLink} from 'react-icons/fi';
import './overlay.css';

const Overlay = ({saleImg,...props}) => {
        return (
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
                            <img class="img-fluid" variant="none" src={saleImg}/>
                            <p className="buy">BUY FROM</p>
                            <p className="link">order.ofas.tech/bismillahrestaurant <FiLink size={25} style={{marginLeft: 10}} /></p>
                         </div>
                    </div>
        )

    }

export default Overlay;