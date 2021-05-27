import React from 'react'
import '../Products/Products.css';
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import {Link } from "react-router-dom";
import Product from '../Product';
import { AiOutlineSearch } from "react-icons/ai";
function Products() {
    return ( 
        
    <div className="container-fluid ">
        <div className='row header'>
            <p>Bismillah Outlet</p>                        
        </div>
            
        <div className="container catalouge">
            <p className="heading"><b>Catalouge</b></p>
        </div>

        
           
        
            <div className= "container flex-container-2 ">
               <div className="row">
                    <div className="input-group-prepend col-12 col-md-6  ">
                    <input type="text" className="form-control" placeholder="Search for a product"></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary btninv" type="button">
                                    <i><AiOutlineSearch /></i>
                                </button>
                            </div>
                    </div>
                    <div className="col-12  col-md-6 add-btn">
                    <Link to={"../Addproduct/Addproduct"}><button className=" new-product">Add New Product</button></Link>
                    </div></div>
                </div>



              {/*Items
                    Item-1*/}
             <div className= "container">
              <div className= "row " style={{justifyContent:"space-around"}}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
              </div>
            </div>
        

    
          
   </div>
    )

    }

export default Products