import React from 'react'
import './EditProduct.css';
import { IconContext } from "react-icons";
import { FaPencilAlt } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdArrowDropUp } from "react-icons/md";



function EditProduct() {
    return (
        <div className="container-fluid ">
            <div className='row header'>
                <p>Bismillah Outlet</p>
            </div>

            <div className="container catalouge">
                <p className="heading"><b>Edit product</b></p>
            </div>

            {/*images*/}
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

                <div className="prod-tit"><b>Product information</b></div>

                < div class="form-group">
                    <label for="Product Name">Product name</label>
                    <input type="text" class="form-control" name="product name" id="product name" placeholder="Enter product name" />
                </div>
                {/*select outlet*/}
                < div class="  category container">
                    <div className="row">
                        <div className="col-10 col-md-5">
                            <div className="row" style={{ flexDirection: "column" }}>
                                <label className="selected-outlet" style={{ whiteSpace: "nowrap" }} >Select outlet </label>
                                <button type="button" class="btn btn-unit col-12 p-1" style={{ alignSelf: "flex-start" }} data-toggle="modal" data-target="#exampleModal">Outlet</button>
                            </div>
                        </div>
                        <div className=" col-10 offset-md-2 col-md-5 ">
                            <div className=" chose-cat row">
                                <div className="col-12"><label for=" col-12 Choose category quantity">Quantity</label></div>
                            </div>

                            <div className="row unit">
                                <input type="text" class="form-control col-3" name="quantity" id=" quantity" placeholder="" />
                                <button type="button" class="btn btn-unit col-3 " data-toggle="modal" data-target="#exampleModalCenter">
                                    unit</button>
                                <div className="offset-1">per (q) (unit)</div>
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
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    {/*1*/}<button className="modal-btns">piece</button>
                                    {/*2*/}<button className="modal-btns">kg</button>
                                    {/*3*/}<button className="modal-btns">gm</button>
                                    {/*4*/}<button className="modal-btns">ml</button>
                                    {/*5*/}<button className="modal-btns">litre</button>
                                    {/*6*/}<button className="modal-btns">mm</button>
                                    {/*7*/}<button className="modal-btns">ft</button>
                                    {/*8*/}<button className="modal-btns">meter</button>
                                    {/*9*/}<button className="modal-btns">sq.ft.</button>
                                    {/*10*/}<button className="modal-btns">set</button>
                                    {/*11*/}<button className="modal-btns">hour</button>
                                    {/*12*/}<button className="modal-btns">day</button>
                                    {/*13*/}<button className="modal-btns">bunch</button>
                                    {/*14*/}<button className="modal-btns">bundle</button>
                                    {/*15*/}<button className="modal-btns">month</button>
                                    {/*16*/}<button className="modal-btns">year</button>
                                    {/*17*/}<button className="modal-btns">service</button>
                                    {/*18*/}<button className="modal-btns">work</button>
                                    {/*19*/}<button className="modal-btns">packet</button>
                                    {/*20*/}<button className="modal-btns">box</button>
                                    {/*21*/}<button className="modal-btns">pound</button>
                                    {/*22*/}<button className="modal-btns">dozen</button>
                                    {/*23*/}<button className="modal-btns">gunta</button>
                                    {/*24*/}<button className="modal-btns">pair</button>
                                    {/*25*/}<button className="modal-btns">minute</button>
                                    {/*26*/}<button className="modal-btns">quintal</button>
                                    {/*27*/}<button className="modal-btns">ton</button>
                                    {/*28*/}<button className="modal-btns">capsule</button>
                                    {/*29*/}<button className="modal-btns">tablet</button>
                                    {/*30*/}<button className="modal-btns">plate</button>
                                    {/*31*/}<button className="modal-btns">inch</button>

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
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1"> Outlet 1</label><br></br>
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                                    <label for="vehicle1"> Outlet 2</label><br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*rates*/}
                <div className="container rates">
                    <div className="row ">
                        <div className="col-12 col-md-5  mrp">
                            <div className="row row-mrp">
                                <label for="MRP">MRP</label>
                                <input type="text" class="form-control" name="mrp" id="mrp" placeholder="" />
                            </div>
                        </div>
                        <div className="col-12 col-md-5 offset-md-2 selling-rate">
                            <div className="row row-sale-rate">
                                <label for="Selling price">Selling price</label>
                                <input type="text" class="form-control" name="selling price" id="selling price" placeholder="" />

                            </div>
                        </div>
                    </div>
                </div>
                {/*Product description*/}
                <div className="prod-desc">

                    <label for="Product Name">Product description</label>
                    <textarea class="form-control" id="textArea" rows="3"></textarea>

                </div>

                {/*checkboxes*/}
                <div className=" container  flex check-b">

                    <label className="checkbox-inline check-row" ><input type="checkbox" value="" checked /> variant<FaPencilAlt /></label>
                    <label className="checkbox-inline check-row" ><input type="checkbox" value="" checked /> color</label>
                    <label className="checkbox-inline check-row"><input type="checkbox" value="" checked /> addon</label>
                    <button className="info-btn checkbox-inline "><HiInformationCircle /></button>
                </div>

                {/*variant*/}
                <div className="container flex nav navbar variant ">
                    <div className="row row-sizes">
                        <div className=" col-11  add-vars btn-col-dd">
                            <a className="btn " href="#collapseExample" data-toggle="collapse">variant<FaPencilAlt /></a>
                            <span className="btn btn-dup" href="#collapseExample" data-toggle="collapse"><MdArrowDropUp /></span>
                        </div>
                    </div>
                </div>


                <div className=" collapse container three-set" id="collapseExample">
                    <div className="row row-three-set ">
                        <div className="col-11 col-md-3  size1 row-var">
                            <div className="row row-size1">
                                <label for="Size1">variant </label>
                                <input type="text" class="form-control" name="size1" id="size1" placeholder="" />
                            </div>
                        </div>

                        <div className="col-11 col-md-3 size-mrp">
                            <div className="row row-mrp">
                                <label for="mrp">MRP</label>
                                <input type="text" class="form-control" name="mrp" id="mrp" placeholder="" />
                            </div>
                        </div>


                        <div className="col-11 col-md-3  selling-rate">
                            <div className="row row-sale-rate">
                                <label for="Selling price">Selling price</label>
                                <input type="text" class="form-control" name="selling price" id="selling price" placeholder="" />
                            </div>
                        </div>
                    </div>

                    <div className="row flex-container-rem1">
                        <button class="remove-btn" type="button">REMOVE </button>
                    </div>

                    <div className="row row-ano-size">
                        <button class="ano-btn add-ano-var" type="button">Add another variant </button>
                    </div>
                </div>








                {/*colors div*/}

                <div className="container nav navbar colors ">
                    <div className="row row-clrs">
                        <div className=" add-clrs dropup btn-col-dd">
                            <a class="btn " href="#collapseExample2" data-toggle="collapse">Add colours </a>
                            <span className="btn btn-dup btn-dup-clr" href="#collapseExample2" data-toggle="collapse"><MdArrowDropUp /></span>
                        </div>
                    </div>
                </div>

                <div className="container collapse last-row" id="collapseExample2">
                    <div className="row row-last-row ">
                        <div className="col-11 col-md-3  colour1">
                            <div className="row row-last-clr">
                                <label for="colour1">Colour1</label>
                                <input type="text" class="form-control" name="colour1" id="colour1" placeholder="" />
                            </div>
                        </div>
                        <button class=" red-rem-btn" type="button">REMOVE </button>
                        <div className="col-11 offset-md-3 col-md-3  colour2">
                            <div className="row row-last-clr">
                                <label for="colour2 ">Colour2</label>
                                <input type="text" class="form-control" name="colour2" id="colour2" placeholder="" />
                            </div>
                        </div>
                        <button class="red-rem-btn" type="button">REMOVE </button>
                    </div>


                    <div className="row row-ano-clr">
                        <button class="ano-btn add-ano-clr" type="button">Add another colour </button>
                    </div>
                </div>

                {/*addons*/}
                <div className="container nav navbar addons ">
                    <div className="row row-clrs">
                        <div className=" add-clrs dropup btn-col-dd">
                            <a class="btn " href="#collapseExample3" data-toggle="collapse">Addons </a>
                            <span className="btn btn-dup btn-dup-add" href="#collapseExample3" data-toggle="collapse" ><MdArrowDropUp /></span>
                        </div>
                    </div></div>


                <div className="container collapse last-row" id="collapseExample3">
                    <div className="row row-last-row ">
                        <div className="col-11 col-md-5  colour1">
                            <div className="row row-last-clr">
                                <label for="colour1">Item name</label>
                                <input type="text" class="form-control" name="colour1" id="colour1" placeholder="" />
                            </div>
                        </div>

                        <div className="col-11  col-md-3 colour1 ">
                            <div className="row row-last-clr">
                                <label for="colour1">Price</label>
                                <input type="text" class="form-control" name="colour1" id="colour1" placeholder="" />
                            </div>
                        </div>
                        <button class="red-rem-btn" type="button">REMOVE </button>
                    </div>


                    <div className="row row-ano-adon">
                        <button class="ano-btn add-ano-btn" type="button">Add another Addon </button>
                    </div>
                </div>

            </div>
            {/*last button-Products*/}
            <div className="prod-last-btns" style={{padding:"10px 0"}}>
                <div className="row">
                    <div className=" offset-md-3 col-5  col-md-4 cancel-prod">
                        <button className="btn  btn-cancel" type="submit">Cancel</button>
                    </div>

                    <div className="last-prod col-5 col-md-4 ">
                        <button className="btn btn-last-prod" type="submit">Save Product</button>
                    </div>
                </div>
            </div>









        </div>

    )
}
export default EditProduct