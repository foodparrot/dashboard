import React, { Component } from 'react';
import '../Inventory/Inventory.css';
import { AiOutlineSearch } from "react-icons/ai";
export class Inventory extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='upperdivInv'>
                    <p>Bismillah Outlet!</p>
                </div>
                {/*<div className='row'style={{padding:'2% 0'}}>
                    <p className='col-2'>Outlet </p>
                    <div className='col-10'>
                        <input list='outletsinv' class='form-control'placeholder=''style={{width:'30%'}}></input>
                            <datalist id="outletsinv">
                                <option value="Outlet-1"></option>
                                <option value="Outlet-2"></option>
                                <option value="Outlet-3"></option>
                            </datalist>
                    </div>
        </div>*/}
                <div className="container nav navbar dropdown_cls_inv">
                    <div className="row">
                        <p className='col-6 p_inv'>Outlet </p>
                        <div className="col-6 outletinv dropdown">
                            <a href="#" class="dropdown-toggle anc-tag-inv " data-toggle="dropdown">Outlet</a>
                            <div class="dropdown-menu">
                                <a href="#" class="dropdown-item">Outlet-1</a>
                                <a href="#" class="dropdown-item">Outlet-2</a>
                                <a href="#" class="dropdown-item">Outlet-3</a>
                            </div>
                        </div>
                    </div>
                </div>

                <p>Inventory</p>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="input-group inv1">
                            <input type="text" className="form-control" placeholder="Search for a product"></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary btninv" type="button">
                                    <i><AiOutlineSearch /></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              
                <table class="table table-striped tableinventory">
                    <thead>
                        <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">Dosa</td>
                            <td>30/-</td>
                            <td>
                                <label class="switch swtchinv">
                                    <input type="checkbox"></input>
                                    <span class="sliderinv round"></span>
                                </label>

                            </td>
                        </tr>

                        <tr>
                            <td scope="row">Dosa</td>
                            <td>30/-</td>
                            <td>
                                <label class="switch swtchinv">
                                    <input type="checkbox"></input>
                                    <span class="sliderinv round"></span>
                                </label>

                            </td>
                        </tr>

                        <tr>
                            <td scope="row">Dosa</td>
                            <td>30/-</td>
                            <td>
                                <label class="switch swtchinv">
                                    <input type="checkbox"></input>
                                    <span class="sliderinv round"></span>
                                </label>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Inventory;