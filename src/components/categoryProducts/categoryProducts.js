import React from 'react';
import { GiPencil } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
import ProductCard from '../ProductCard/Productcard';
import './categoryProducts.css';

function categoryProducts () {
    return(
        <>
         <div className="container-fluid ">
            <div className='row header'>
                <p>Bismillah Outlet</p>
            </div>
            <div className="outer">
             <div className="container catalouge catal">
                <p className="heading heading1"><b>Cat1</b></p>
                <div className="pencil">
                  <GiPencil className="pencilIcon" />
                </div>
             </div>
             <div className="row searchArea">
              <div className="col-12 col-md-6 searchs">
                <FiSearch className="search2" /><input className="searchInp searchP" type="search" placeholder="Search Products"/>
              </div>
              <div className="col-12 col-md-3 add-product">
                <button className=" new-product">Add Product</button>
              </div>
             </div>
                <div className="container">
                    <div className="row " style={{ justifyContent: "space-around" }}>
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default categoryProducts;