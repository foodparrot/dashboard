import React from 'react'
import '../Products/Products.css';
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import {Link } from "react-router-dom";

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
                    <div className="input-group-prepend col-12 col-md-8  ">
                    <IconContext.Provider value={{ color: 'blue', size: '25px'}}>
    
                    <button id="button button-addon" type="submit" class="btn btn-s"><BsSearch/></button></IconContext.Provider>
                    
                    <input type="search" placeholder="Search products" aria-describedby="button-addon" className=" border-1 bg-light sbox"/>
                    </div>
                    <div className="col-12  col-md-4 add-btn">
                    <Link to={"../Addproduct/Addproduct"}><button className=" new-product">Add New Product</button></Link>
                    </div></div>
                </div>



              {/*Items
                    Item-1*/}
             <div className= "container row-itms ">
              <div className= "row ">
                  <div className="col-12 col-md-5 prod-set-1 ">

                     <div className="row row3 ">
                         <div className= "col-4 col-offset-1 img-1" >
                             <img src="#" alt="item"/>
                         </div>
                         <div className="col-4 col-offset-1 itm-text1">
                          item 1 <br></br> 1 piece<br></br>250/-<br></br><span className="in-stock">In stock</span>
                         </div>
                         <div className="col-2 dots">
                             <button className="three-dots"><BsThreeDotsVertical/></button>
                         </div></div>
                         
                     <div className="row row4">
                     <IconContext.Provider value={{  size: '40px'}}>
                       <button className="share-btn"><RiShareForwardLine/>Share product</button></IconContext.Provider>
                     </div>
                    </div>

                    {/*Item-2*/}
                     <div className="col-12 col-md-5 prod-set-2 ">

                     <div className="row row3 ">
                         <div className= "col-4 col-offset-1 img-1" >
                             <img src="#" alt="item"/>
                         </div>
                         <div className="col-4 col-offset-1 itm-text1">
                          item 1 <br></br> 1 piece<br></br>250/-<br></br><span className="in-stock">In stock</span>
                         </div>
                         <div className="col-2 dots">
                             <button className="three-dots"><BsThreeDotsVertical/></button>
                         </div></div>
                    
                     <div className="row row4">
                     <IconContext.Provider value={{  size: '40px'}}>
                       <button className="share-btn"><RiShareForwardLine/>Share product</button></IconContext.Provider>
                     </div>
                   </div>
                </div>
            </div>
        

    
          
   </div>
    )

    }

export default Products