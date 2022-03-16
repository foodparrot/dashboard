import React from 'react'
import '../Products/Products.css';
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ProductCard from '../ProductCard/Productcard';
import { AiOutlineSearch } from "react-icons/ai";
function Products() {
    return (

        <div className="container-fluid ">

            <p style={{ fontSize: '1.2em', fontWeight: '600' }}>Bismillah Outlet</p>

            <div className='propal'>
                <div className="container catalouge">
                    <p className="heading"><b>All products</b></p>
                </div>

                <div className="container flex-container-2 ">
                    <div className="row">
                        <div className="input-group col-12 col-md-6">
                            <input type="text" className="form-control" placeholder="Search for a product"></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary btninv" style={{ background: ' linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)' }} type="button">
                                    <i><AiOutlineSearch /></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-12  col-md-5 add-btn">
                            <Link to={"/products/new"}><button className=" new-product">Add New Product</button></Link>
                        </div></div>
                </div>



                {/*Items
                    Item-1*/}
                <div className="container">
                    <div className="row " style={{ justifyContent: "space-around" }}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>

            </div>


        </div>
    )

}

export default Products