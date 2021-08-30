import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './product.css';

function product() {
  const [open, setOpen] = useState(false);

  const eventModal = () => {
    setOpen((o) => true);
  }
    return (
                   <div className="col-12 col-md-5 box1">
                        <div className="row">
                            <div className="col-3 imgb">
                                <img className="img-fluid" src="https://via.placeholder.com/100"></img>
                            </div>
                            <div className="col-8 items">
                                <div> Cart2
                                    <div className="dot tooltipBoundary">
                                    <Popup trigger=
                                        {<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                        </svg></button>}
                                        position={['right top']}
                                        closeOnDocumentClick
                                        keepTooltipInside=".tooltipBoundary">
                                        <div className="menu menunew">
                                           <div className="menu-item items itemsmenu"><button onClick={eventModal} type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button></div>
                                           <div className="menu-item items itemsmenu"> Outlets</div>
                                           <div className="menu-item items itemsmenu"> Edit</div>
                                           <div className="menu-item items itemsmenu itemsmenu1"> DELETE</div>
                                           <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                             <div class="modal-dialog modal-sm">
                                             <div class="modal-content">
                                                ...
                                             </div>
                                             </div>
                                           </div>
                                        </div>
                                    </Popup>
                                    </div>
                                </div>
                                <div>3 Products</div>
                                <div className="sto">In Stock</div>
                            </div>
                            <div className="col-12 sha">
                                <a ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
                                    </svg>Share Category</a>
                            </div>
                          </div>
                        </div>
    )
}

export default product;
