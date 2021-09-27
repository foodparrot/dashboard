import React, { useState, useRef } from 'react';
import BootstrapModal from '../Popups/BootstrapModal';
import { Button } from "react-bootstrap";
import OptionsModal from '../Popups/OptionsModal';
import Option from '../Popups/Option';
import {BsSearch} from 'react-icons/bs';
import Switch from "react-switch";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from 'react-icons/hi';
import './Productcard.css';

function ProductCard () {

  const [openO, setOpenO] = useState(false);
  const [openD, setOpenD] = useState(false);
    const onCloseO = () => setOpenO(false);
    const onCloseD = () => setOpenD(false);
    const popRef = useRef();


    const BodyOutlets = () => (
      <div>
        <div className="optionsP">
          <div className="optionP">
            <div>
              <p>Outlet 1</p>
            </div>
            <div>
              <Switch  checked={false} onColor="#70CC49"/>
            </div>
          </div>
          <div className="optionP">
            <div>
              <p>Outlet 2</p>
            </div>
            <div>
              <Switch  checked={true} onColor="#70CC49"/>
            </div>
          </div>
        </div>
      </div>
    )
    const BodyDelete = () => (
      <div>
        <p>Are you sure you want to delete ?</p>
      </div>
    )
    const TitleOutlets = () => (
      <>
        <h1 className="titlePO">Cart 1</h1>
        <p className="available">Available 2 of 2 Outlets</p>
      </>
    )
  const FooterOutlets = () => (
    <div>
        <Button onClick={onCloseO}>Close</Button>
    </div>
  )
  const FooterDelete = () => (
    <div>
      <Button variant="danger" onClick={onCloseD}>Delete</Button>
    </div>
  )
    return (
                   <div className="col-12 col-md-5 box1">
                        <div className="row">
                            <div className="col-3 imgb">
                                <img className="img-fluid" src="https://via.placeholder.com/100"></img>
                            </div>
                            <div className="col-8 items">
                                <div> Cart2
                                    <div className="dot tooltipBoundary">
                                    <OptionsModal  ref={popRef}>
                                      <Option className="itemsmenu" onClick={() => {
                                         // to close the OptionsModal
                                        popRef.current.close();
                                        setOpenO(o => !o);
                                        }}>Outlets</Option>
                                      <Option className="itemsmenu itemsmenu1" onClick={() => {
                                           // to close the OptionsModal
                                          popRef.current.close();
                                          setOpenD(o => !o);
                                          }}>DELETE</Option>
                                      </OptionsModal>
                                      <BootstrapModal title={<TitleOutlets />} onHide={onCloseO} show={openO} footer={<FooterOutlets />}>
                                          <BodyOutlets />
                                      </BootstrapModal>
                                      <BootstrapModal onHide={onCloseD} show={openD} footer={<FooterDelete />}>
                                            <BodyDelete />
                                      </BootstrapModal>
                                    </div>
                                </div>
                                <div>3 Products</div>
                                <div className="sto">In Stock</div>
                            </div>
                            <div className="col-12 sha">
                                <Link to={"../categoryProducts"} className="view-link"><p className="right-arrow-p">View<HiChevronDoubleRight className="right-arrow" /></p></Link>
                                <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
                                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
                                    </svg>Share Category
                                </a>
                            </div>
                          </div>
                        </div>
    )
}

export default ProductCard;