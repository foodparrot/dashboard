import React, { Component, useState } from 'react';
import CategoryCard from '../CategoryCard/Categorycard';
import './View.css';
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {FaEdit} from 'react-icons/fa';
const View = () => {
    const [editMenu, setEditMenu] = useState(false);
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setEditMenu(o => !o);
        document.getElementById("MenuName").disabled = true;
    }
    const handleEdit=(e)=>{
        e.preventDefault();
        setEditMenu(o => !o);
        document.getElementById("MenuName").disabled = false;
    }
    return (
        <div className="container">
            <div className="container-fluid row rowps-1">
                <p>Bismillah</p>
            </div>
            <div className="container ps">
                <p className="paraps">Edit menu</p>
                <div>
                    <form>
                        <div className='d-flex'>
                            <div class=" col-12 col-md-4 mb-3 " style={{paddingLeft:"0"}}>
                                <label for="exampleInputEmail1" class="form-label">Name</label>
                                <input type="email" class="form-control" disabled id="MenuName" aria-describedby="emailHelp"></input>
                            </div>
                            <div class=" col-12 col-md-4 mb-3 savBtn" style={{paddingLeft:"0"}}>
                                {editMenu ? <button className=" new-product" onClick={handleSaveEdit}>Save</button> : <FaEdit style={{fontSize:"1.6rem"}} onClick={handleEdit}/>}
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <div className="input-group inv1 p-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for a category"
                            ></input>

                            <button
                                className="btn btn-secondary input-group-text"
                                type="button"
                                style={{
                                    background:
                                        " linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)",
                                    border: "none",
                                }}
                            >
                                <i>
                                    <AiOutlineSearch />
                                </i>
                            </button>
                        </div>
                    </div>

                    <div className="col-12  col-md-5 add-btn">
                        <Link to={"/category/new"}>
                            <button className=" new-product">Add New category</button>
                        </Link>
                    </div>
                </div>
                <div className="container box0">
                    <div className="row" style={{ justifyContent: "space-around" }}>
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                </div>
            </div>


            <div className="gapps"></div>
        </div>


    );
}
export default View