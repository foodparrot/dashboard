import React from 'react';
import {BsPlusCircle} from 'react-icons/bs';
import Overlay from './../SaleOverlay/overlay';
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
                        <Overlay saleImg='.\images\blackfridaysale.png'/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="row salespart">
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder">
                        <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder">
                        <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder">
                        <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                    </div>
                </div>
            </div>
            <div className="row salespart">
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder">
                        <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder">
                        <img className="saleimg" variant="none" src='\images\blackfridaysale.png'/>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <div className="saleImgBorder additional">
                        <BsPlusCircle style={{ stroke: "url(#orange-gradient)", width: '76px', height: '76px'}}/>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default StoreBanner;