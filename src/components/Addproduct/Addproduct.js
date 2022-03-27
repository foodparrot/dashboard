"use strict";
import React, { useState, useEffect } from "react";
import "../Addproduct/Addproduct.css";
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdArrowDropUp } from "react-icons/md";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { IoCloseSharp } from "react-icons/io5";
function Addproduct() {
  const contentStyle = {
    maxWidth: "600px",
    width: "90%",
  };
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#333");
  useEffect(() => {
    const popupContentEle = document.querySelector(".subModal-content");
    if (popupContentEle) {
      popupContentEle.style.setProperty("border", color, "important");
      popupContentEle.style.setProperty("background-color", color, "important");
      popupContentEle.style.setProperty("background", color, "important");
    }
  }, [color, displayColorPicker]);

  const handleClick = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    console.log(color);
  };
  const styles = reactCSS({
    default: {
      colorcode: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        backgroundColor: `${color}`,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      //   popover: {
      //     position: "absolute",
      //     zIndex: "2",
      //   },
      cover: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  });
  return (
    // <div className="container-fluid ">
    //   <div className="row header">
    //     <p>Bismillah Outlet</p>
    //   </div>

    //   <div className="container catalouge">
    //     <p className="heading">
    //       <b>Add new product</b>
    //     </p>
    //   </div>

    //   {/*images*/}
    // <div className="container prod-images">
    //   <div className="row row-5">
    //     <div>Product images(upto 8)</div>
    //   </div>

    //   <div className="row row-6">
    //     <div className="col-5 col-md-3 col-lg-2  imge">
    //       <img src="/images/1.jpg" alt="img1" className="img-1" />
    //     </div>
    //     <div className="col-5  col-md-3 col-lg-2 imge">
    //       <img src="/images/2.jpg" alt="img1" className="img-1" />
    //     </div>
    //   </div>
    // </div>

    // {/*product information*/}
    // {/*prod-name*/}
    // <div className="container prod-info">
    //   <div className="prod-tit">
    //     <b>Product information</b>
    //   </div>

    //   <div class="form-group">
    //     <label for="Product Name">Product name</label>
    //     <input
    //       type="text"
    //       class="form-control"
    //       name="product name"
    //       id="product name"
    //       placeholder="Enter product name"
    //     />
    //   </div>
    //   {/*select outlet*/}
    //   <div class="  category container">
    //     <div className="row">
    //       <div className="col-6 col-md-6">
    //         <div className="row" style={{ flexDirection: "column" }}>
    //           <label
    //             className="selected-outlet"
    //             style={{ whiteSpace: "nowrap" }}
    //           >
    //             Select outlet{" "}
    //           </label>
    //           <button
    //             type="button"
    //             class="btn btn-unit col-12 p-1"
    //             style={{ alignSelf: "flex-start" }}
    //             data-bs-toggle="modal"
    //             data-bs-target="#exampleModal"
    //           >
    //             Outlet
    //           </button>
    //         </div>
    //       </div>
    //       <div className="col-md-6">
    //         <div className="col-12 chose-cat">
    //           <label for="Choose category quantity">Quantity</label>
    //         </div>
    //         <div className="col-12 unit m-0 d-flex">
    //           <div className="col-4">
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="quantity"
    //               id=" quantity"
    //               placeholder=""
    //             />
    //           </div>
    //           <div className="col-2 m-0 ms-2">
    //             <button
    //               type="button"
    //               class="btn btn-unit m-0"
    //               data-bs-toggle="modal"
    //               data-bs-target="#exampleModalCenter"
    //             >
    //               unit
    //             </button>
    //           </div>
    //           <div className="col-4 w-100 m-0">per (q) (unit)</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/*modal for unit*/}
    //   <div className="modal fade" id="exampleModalCenter">
    //     <div className="vertical-alignment-helper">
    //       <div className="modal-dialog vertical-align-center">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h5>Choose Product unit</h5>
    //             <button
    //               type="button"
    //               class="close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             >
    //               <span aria-hidden="true">&times;</span>
    //             </button>
    //           </div>
    //           <div className="modal-body">
    //             {/*1*/}
    //             <button className="modal-btns">piece</button>
    //             {/*2*/}
    //             <button className="modal-btns">kg</button>
    //             {/*3*/}
    //             <button className="modal-btns">gm</button>
    //             {/*4*/}
    //             <button className="modal-btns">ml</button>
    //             {/*5*/}
    //             <button className="modal-btns">litre</button>
    //             {/*6*/}
    //             <button className="modal-btns">mm</button>
    //             {/*7*/}
    //             <button className="modal-btns">ft</button>
    //             {/*8*/}
    //             <button className="modal-btns">meter</button>
    //             {/*9*/}
    //             <button className="modal-btns">sq.ft.</button>
    //             {/*10*/}
    //             <button className="modal-btns">set</button>
    //             {/*11*/}
    //             <button className="modal-btns">hour</button>
    //             {/*12*/}
    //             <button className="modal-btns">day</button>
    //             {/*13*/}
    //             <button className="modal-btns">bunch</button>
    //             {/*14*/}
    //             <button className="modal-btns">bundle</button>
    //             {/*15*/}
    //             <button className="modal-btns">month</button>
    //             {/*16*/}
    //             <button className="modal-btns">year</button>
    //             {/*17*/}
    //             <button className="modal-btns">service</button>
    //             {/*18*/}
    //             <button className="modal-btns">work</button>
    //             {/*19*/}
    //             <button className="modal-btns">packet</button>
    //             {/*20*/}
    //             <button className="modal-btns">box</button>
    //             {/*21*/}
    //             <button className="modal-btns">pound</button>
    //             {/*22*/}
    //             <button className="modal-btns">dozen</button>
    //             {/*23*/}
    //             <button className="modal-btns">gunta</button>
    //             {/*24*/}
    //             <button className="modal-btns">pair</button>
    //             {/*25*/}
    //             <button className="modal-btns">minute</button>
    //             {/*26*/}
    //             <button className="modal-btns">quintal</button>
    //             {/*27*/}
    //             <button className="modal-btns">ton</button>
    //             {/*28*/}
    //             <button className="modal-btns">capsule</button>
    //             {/*29*/}
    //             <button className="modal-btns">tablet</button>
    //             {/*30*/}
    //             <button className="modal-btns">plate</button>
    //             {/*31*/}
    //             <button className="modal-btns">inch</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* outlets modal*/}
    //   <div className="modal fade" id="exampleModal">
    //     <div className="vertical-alignment-helper">
    //       <div className="modal-dialog vertical-align-center">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h5>Select outlet for the product to appear</h5>
    //             <button
    //               type="button"
    //               class="close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             >
    //               <span aria-hidden="true">&times;</span>
    //             </button>
    //           </div>
    //           <div className="modal-body">
    //             <input
    //               type="checkbox"
    //               id="vehicle1"
    //               name="vehicle1"
    //               value="Bike"
    //             ></input>
    //             <label for="vehicle1"> Outlet 1</label>
    //             <br></br>
    //             <input
    //               type="checkbox"
    //               id="vehicle1"
    //               name="vehicle1"
    //               value="Bike"
    //             ></input>
    //             <label for="vehicle1"> Outlet 2</label>
    //             <br></br>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/*rates*/}
    //   {/* <div className="container rates">
    //     <div className="row ">
    //       <div className="col-12 col-md-5  mrp">
    //         <div className="row row-mrp">
    //           <label for="MRP">MRP</label>
    //           <input
    //             type="text"
    //             class="form-control"
    //             name="mrp"
    //             id="mrp"
    //             placeholder=""
    //           />
    //         </div>
    //       </div>
    //       <div className="col-12 col-md-5 offset-md-2 selling-rate">
    //         <div className="row row-sale-rate">
    //           <label for="Selling price">Selling price</label>
    //           <input
    //             type="text"
    //             class="form-control"
    //             name="selling price"
    //             id="selling price"
    //             placeholder=""
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div> */}
    //   {/*Product description*/}
    //   <div className="prod-desc">
    //     <label for="Product Name">Product description</label>
    //     <textarea class="form-control" id="textArea" rows="3"></textarea>
    //   </div>

    //   {/*checkboxes*/}
    //   <div className=" container  flex check-b">
    //     <label className="checkbox-inline check-row">
    //       <input type="checkbox" value="" checked /> variant
    //       <FaPencilAlt />
    //     </label>
    //     <label className="checkbox-inline check-row">
    //       <input type="checkbox" value="" checked /> color
    //     </label>
    //     <label className="checkbox-inline check-row">
    //       <input type="checkbox" value="" checked /> addon
    //     </label>
    //     <button className="info-btn checkbox-inline ">
    //       <HiInformationCircle />
    //     </button>
    //   </div>

    //     {/*variant*/}
    //     <div className="container flex nav navbar variant ">
    //       <div className="row row-sizes">
    //         <div className=" col-11  add-vars btn-col-dd">
    //           <a
    //             className="btn "
    //             data-bs-target="#collapseExample"
    //             data-bs-toggle="collapse"
    //           >
    //             variant
    //             <FaPencilAlt />
    //           </a>
    //           <span
    //             className="btn btn-dup"
    //             data-bs-target="#collapseExample"
    //             data-bs-toggle="collapse"
    //           >
    //             <MdArrowDropUp />
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className=" collapse container three-set" id="collapseExample">
    //       <div className="row row-three-set ">
    //         <div className="col-11 col-md-3  size1 row-var">
    //           <div className="row row-size1">
    //             <label for="Size1">variant </label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               name="size1"
    //               id="size1"
    //               placeholder=""
    //             />
    //           </div>
    //         </div>

    //         <div className="col-11 col-md-3 size-mrp">
    //           <div className="row row-mrp">
    //             <label for="mrp">MRP</label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               name="mrp"
    //               id="mrp"
    //               placeholder=""
    //             />
    //           </div>
    //         </div>

    //         <div className="col-11 col-md-3  selling-rate">
    //           <div className="row row-sale-rate">
    //             <label for="Selling price">Selling price</label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               name="selling price"
    //               id="selling price"
    //               placeholder=""
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="row flex-container-rem1">
    //         <button class="remove-btn" type="button">
    //           REMOVE{" "}
    //         </button>
    //       </div>

    //       <div className="row-ano-size">
    //         <button class="ano-btn add-ano-var" type="button">
    //           Add another variant{" "}
    //         </button>
    //       </div>
    //     </div>

    //     {/*colors div*/}
    //     <div className="container nav navbar colors ">
    //       <div className="row row-clrs">
    //         <div className=" add-clrs dropup btn-col-dd">
    //           <a
    //             class="btn "
    //             data-bs-target="#collapseExample2"
    //             data-bs-toggle="collapse"
    //           >
    //             Add colours{" "}
    //           </a>
    //           <span
    //             className="btn btn-dup btn-dup-clr"
    //             data-bs-target="#collapseExample2"
    //             data-bs-toggle="collapse"
    //           >
    //             <MdArrowDropUp />
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="container collapse last-row" id="collapseExample2">
    //       <div className="col-3 " style={{ padding: "5px 0" }}>
    //         <select className="form-select" aria-label="Default select example">
    //           <option selected>Select varient</option>
    //           <option value="1">varient1</option>
    //           <option value="2">varient2</option>
    //           <option value="3">varient3</option>
    //         </select>
    //       </div>
    //       <div>
    //         <div style={styles.swatch}>
    //           <div style={styles.colorcode} />
    //         </div>
    //       </div>
    //       <div className="row-ano-clr">
    //         <Popup
    //           className="subModal"
    //           onOpen={() => setDisplayColorPicker(true)}
    //           onClose={() => setDisplayColorPicker(false)}
    //           trigger={
    //             <button class="ano-btn add-ano-clr" type="button">
    //               Add another colour
    //             </button>
    //           }
    //           modal
    //         >
    //           {(close) => (
    //             <div style={{ background: `${color}` }}>
    //               <button className="closeColorBtn" onClick={close}>
    //                 &times;
    //               </button>
    //               <div className="content">
    //                 <div style={styles.cover}>
    //                   <SketchPicker color={color} onChange={handleChange} />
    //                 </div>
    //               </div>
    //               <div
    //                 className="actions"
    //                 style={{ display: "flex", justifyContent: "center" }}
    //               >
    //                 <button className="addColour">Add colour</button>
    //               </div>
    //             </div>
    //           )}
    //         </Popup>
    //       </div>
    //     </div>

    //     {/*addons*/}
    //     <div className="container nav navbar addons ">
    //       <div className="row row-clrs">
    //         <div className=" add-clrs dropup btn-col-dd">
    //           <a
    //             class="btn "
    //             data-bs-target="#collapseExample3"
    //             data-bs-toggle="collapse"
    //           >
    //             Addons{" "}
    //           </a>
    //           <span
    //             className="btn btn-dup btn-dup-add"
    //             data-bs-target="#collapseExample3"
    //             data-bs-toggle="collapse"
    //           >
    //             <MdArrowDropUp />
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="container collapse last-row" id="collapseExample3">
    //       <div className="row row-last-row ">
    //         <div className="col-11 col-md-5  colour1">
    //           <div className="row row-last-clr">
    //             <label for="colour1">Item name</label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               name="colour1"
    //               id="colour1"
    //               placeholder=""
    //             />
    //           </div>
    //         </div>

    //         <div className="col-11  col-md-3 colour1 ">
    //           <div className="row row-last-clr">
    //             <label for="colour1">Price</label>
    //             <input
    //               type="text"
    //               class="form-control"
    //               name="colour1"
    //               id="colour1"
    //               placeholder=""
    //             />
    //           </div>
    //         </div>
    //         <button class="red-rem-btn" type="button">
    //           REMOVE{" "}
    //         </button>
    //       </div>

    //       <div className="row-ano-adon">
    //         <button class="ano-btn add-ano-btn" type="button">
    //           Add another Addon{" "}
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   {/*last button-Products*/}
    //   <div className="prod-last-btns" style={{ padding: "10px 0" }}>
    //     <div className="row">
    //       <div className=" offset-md-3 col-5  col-md-4 cancel-prod">
    //         <button className="btn  btn-cancel" type="submit">
    //           Cancel
    //         </button>
    //       </div>

    //       <div className="last-prod col-5 col-md-4 ">
    //         <button className="btn btn-last-prod" type="submit">
    //           Add Product
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container">
      <div className="container-fluid row rowps-1">
        <p>Bismillah</p>
      </div>
      <div className="container-fluid ps">
        <p className="paraps">Add product</p>
        <div className="container prod-images">
          <div className="row row-5">
            <div>Product images(upto 8)</div>
          </div>

          <div className="row row-6">
            <div className="col-5 col-md-3 col-lg-2  imge">
              <img src="/images/1.jpg" alt="img1" className="img-1" />
            </div>
            <div className="col-5  col-md-3 col-lg-2 imge">
              <img src="/images/2.jpg" alt="img1" className="img-1" />
            </div>
          </div>
        </div>

        {/*product information*/}
        {/*prod-name*/}
        <div className="container prod-info">
          <div className="prod-tit">
            <b>Product information</b>
          </div>

          <div class="form-group">
            <label for="Product Name">Product name</label>
            <input
              type="text"
              class="form-control"
              name="product name"
              id="product name"
              placeholder="Enter product name"
            />
          </div>
          {/*select outlet*/}
          <div class="  category container">
            <div className="row">
              <div className="col-6 col-md-6">
                <div className="row" style={{ flexDirection: "column" }}>
                  <label
                    className="selected-outlet"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Select outlet{" "}
                  </label>
                  <button
                    type="button"
                    class="btn btn-unit col-12 p-1"
                    style={{ alignSelf: "flex-start" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Outlet
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col-12 chose-cat">
                  <label for="Choose category quantity">Quantity</label>
                </div>
                <div className="col-12 unit m-0 d-flex">
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control"
                      name="quantity"
                      id=" quantity"
                      placeholder=""
                    />
                  </div>
                  <div className="col-2 m-0 ms-2">
                    <button
                      type="button"
                      class="btn btn-unit m-0"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalCenter"
                    >
                      unit
                    </button>
                  </div>
                  <div className="col-4 w-100 m-0">per (q) (unit)</div>
                </div>
              </div>
            </div>
          </div>
          {/*modal for unit*/}
          <div className="modal fade" id="exampleModalCenter">
            <div className="vertical-alignment-helper">
              <div className="modal-dialog vertical-align-center">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5>Choose Product unit</h5>
                    <button
                      type="button"
                      class="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    {/*1*/}
                    <button className="modal-btns">piece</button>
                    {/*2*/}
                    <button className="modal-btns">kg</button>
                    {/*3*/}
                    <button className="modal-btns">gm</button>
                    {/*4*/}
                    <button className="modal-btns">ml</button>
                    {/*5*/}
                    <button className="modal-btns">litre</button>
                    {/*6*/}
                    <button className="modal-btns">mm</button>
                    {/*7*/}
                    <button className="modal-btns">ft</button>
                    {/*8*/}
                    <button className="modal-btns">meter</button>
                    {/*9*/}
                    <button className="modal-btns">sq.ft.</button>
                    {/*10*/}
                    <button className="modal-btns">set</button>
                    {/*11*/}
                    <button className="modal-btns">hour</button>
                    {/*12*/}
                    <button className="modal-btns">day</button>
                    {/*13*/}
                    <button className="modal-btns">bunch</button>
                    {/*14*/}
                    <button className="modal-btns">bundle</button>
                    {/*15*/}
                    <button className="modal-btns">month</button>
                    {/*16*/}
                    <button className="modal-btns">year</button>
                    {/*17*/}
                    <button className="modal-btns">service</button>
                    {/*18*/}
                    <button className="modal-btns">work</button>
                    {/*19*/}
                    <button className="modal-btns">packet</button>
                    {/*20*/}
                    <button className="modal-btns">box</button>
                    {/*21*/}
                    <button className="modal-btns">pound</button>
                    {/*22*/}
                    <button className="modal-btns">dozen</button>
                    {/*23*/}
                    <button className="modal-btns">gunta</button>
                    {/*24*/}
                    <button className="modal-btns">pair</button>
                    {/*25*/}
                    <button className="modal-btns">minute</button>
                    {/*26*/}
                    <button className="modal-btns">quintal</button>
                    {/*27*/}
                    <button className="modal-btns">ton</button>
                    {/*28*/}
                    <button className="modal-btns">capsule</button>
                    {/*29*/}
                    <button className="modal-btns">tablet</button>
                    {/*30*/}
                    <button className="modal-btns">plate</button>
                    {/*31*/}
                    <button className="modal-btns">inch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* outlets modal*/}
          <div className="modal fade" id="exampleModal">
            <div className="vertical-alignment-helper">
              <div className="modal-dialog vertical-align-center">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5>Select outlet for the product to appear</h5>
                    <button
                      type="button"
                      class="close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    ></input>
                    <label for="vehicle1"> Outlet 1</label>
                    <br></br>
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    ></input>
                    <label for="vehicle1"> Outlet 2</label>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*rates*/}
          {/* <div className="container rates">
          <div className="row ">
            <div className="col-12 col-md-5  mrp">
              <div className="row row-mrp">
                <label for="MRP">MRP</label>
                <input
                  type="text"
                  class="form-control"
                  name="mrp"
                  id="mrp"
                  placeholder=""
                />
              </div>
            </div>
            <div className="col-12 col-md-5 offset-md-2 selling-rate">
              <div className="row row-sale-rate">
                <label for="Selling price">Selling price</label>
                <input
                  type="text"
                  class="form-control"
                  name="selling price"
                  id="selling price"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div> */}
          {/*Product description*/}
          <div className="prod-desc">
            <label for="Product Name">Product description</label>
            <textarea class="form-control" id="textArea" rows="3"></textarea>
          </div>

          {/*checkboxes*/}
          <div className=" container  flex check-b">
            <label className="checkbox-inline check-row">
              <input type="checkbox" value="" checked /> variant
              <FaPencilAlt />
            </label>
            <label className="checkbox-inline check-row">
              <input type="checkbox" value="" checked /> color
            </label>
            <label className="checkbox-inline check-row">
              <input type="checkbox" value="" checked /> addon
            </label>
            <button className="info-btn checkbox-inline ">
              <HiInformationCircle />
            </button>
          </div>
        </div>
        <div className="gapps"></div>
      </div>
    </div>
  );
}
export default Addproduct;
