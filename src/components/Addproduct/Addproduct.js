import React from 'react'
import '../Addproduct/Addproduct.css';
import { IconContext } from "react-icons";

function Addproduct() {
    return (
    <div className="container-fluid ">
        <div className='row header'>
            <p>Bismillah Outlet</p>                        
        </div>
            
        <div className="container catalouge">
            <p className="heading"><b>Add new product</b></p>
        </div>

   {/*images*/}
    <div className="container prod-images">

        <div className="row row-5">
            <div>Product images(upto 8)</div>
        </div>

            
        <div className="row row-6">
            <div className="col-6 col-md-1 imge">
                <img src="#" alt="img1" className="img-1"/>
            </div>
        </div>
    </div>
       
   {/*product information*/}
     {/*prod-name*/}
     <div className="container prod-info">
        
            <div className="prod-tit"><b>Product information</b></div>

	        < div class="form-group">
    	        <label for="Product Name">Product name</label>
		        <input type="text" class="form-control" name="product name" id="product name" placeholder="Enter product name"/> 
	        </div>
      {/*slect category*/}
            < div class="category col-5">
    	        <label for=" col-12 Choose category">Choose category</label>


        <div className="container nav navbar ">
            <div className="row">
              <div className=" select-cat dropdown">
               <div  class=" col-12 dropdown-toggle" type="button" data-toggle="dropdown">Select category</div>
                    <div class="dropdown-menu">
                       <a href="#" class="dropdown-item">Cat-1</a>
                       <a href="#" class="dropdown-item">Cat-2</a>
                       <a href="#" class="dropdown-item">Cat-3</a>
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
                     <input type="text" class="form-control" name="mrp" id="mrp" placeholder=""/>
                   </div>
               </div>
               <div className="col-12 col-md-5  selling-rate">
                   <div className="row row-sale-rate">
                   <label for="Selling price">Selling price</label>
                   <input type="text" class="form-control" name="selling price" id="selling price" placeholder=""/>
                    
                   </div>
               </div>
         </div>
</div>
         {/*Product description*/}
         <div className="prod-desc">
           
    	        <label for="Product Name">Product description</label>
                <textarea class="form-control" id="textArea" rows="3"></textarea>

         </div>

         {/*sizes*/}
         


         
        <div className="container nav navbar sizes ">
            <div className="row row-sizes">
              <div className=" add-sizes dropup">
               <div  className=" col-12 dropdown-toggle" type="button" data-toggle="dropdown">Add sizes</div>
                    <div className="  dropdown-menu">
                       <a href="#" class="dropdown-item">Cat-1</a>
                       <a href="#" class="dropdown-item">Cat-2</a>
                       <a href="#" class="dropdown-item">Cat-3</a>
                    </div>
                </div>
            </div>
            </div>
           
        
        <div className="container three-set">
        <div className="row row-three-set ">
               <div className="col-11 col-md-3  size1">
                   <div className="row row-size1">
                   <label for="Size1">Size1</label>
                   <input type="text" class="form-control" name="size1" id="size1" placeholder=""/>
                   </div>
               </div>

               <div className="col-11 col-md-3 size-mrp">
                   <div className="row row-mrp">
                   <label for="mrp">MRP</label>
                   <input type="text" class="form-control" name="mrp" id="mrp" placeholder=""/>
                   </div>
               </div>


               <div className="col-11 col-md-3  selling-rate">
                   <div className="row row-sale-rate">
                   <label for="Selling price">Selling price</label>
                   <input type="text" class="form-control" name="selling price" id="selling price" placeholder=""/>
                   </div>
               </div>
         </div>
          
         <div className="row flex-container-rem1">
         <button class="remove-btn"  type="button">REMOVE </button> 
         </div>
         
         <div className="row row-ano-size">
         <button class="ano-size-btn"  type="button">Add another size </button> 
        </div>
    </div>

         {/*colors div*/}

         <div className="container nav navbar colors ">
            <div className="row row-clrs">
              <div className=" add-clrs dropup">
               <div  className=" col-12 dropdown-toggle" type="button" data-toggle="dropdown">Add colors</div>
                    <div className="  dropdown-menu">
                       <a href="#" class="dropdown-item">Cat-1</a>
                       <a href="#" class="dropdown-item">Cat-2</a>
                       <a href="#" class="dropdown-item">Cat-3</a>
                    </div>
                </div>
            </div>
            </div>
           
            <div className="container last-row">
                <div className="row row-last-row ">
                  <div className="col-11 col-md-3  colour1">
                   <div className="row row-last-clr">
                   <label for="colour1">Colour1</label>
                   <input type="text" class="form-control" name="colour1" id="colour1" placeholder=""/>
                   </div>
               </div>
             </div>
               <div className="row flex-container-rem">
                 <button class="remove-btn-2" type="button">REMOVE </button> 
                 </div>
         
                <div className="row row-ano-clr">
                  <button class="ano-clr-btn" type="button">Add another colour </button> 
                </div>
           </div>

</div>
 {/*last button-Products*/}
        <div className="last-prod">
            <button className="btn  btn-last" type="submit">Add Product</button>
        </div>











        </div>
    )}
    export default Addproduct