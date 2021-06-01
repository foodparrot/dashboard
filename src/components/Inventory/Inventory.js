import React, { Component } from 'react';
import '../Inventory/Inventory.css';
import { AiOutlineSearch } from "react-icons/ai";
export class Inventory extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <p style={{fontWeight:'500', fontSize:'1.3em'}}>Bismillah Outlet</p> 
                <div className='upperdivInv'>
                    
                
                <div className="container nav navbar dropdown_cls_inv">
                    <div className="row">
                        <p className='col-6 p_inv' style={{fontSize:'1em', fontWeight:'600'}}>Outlet </p>
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

                <p className='container'style={{fontSize:'1em', fontWeight:'600'}}>Inventory</p>
                <div className='container row'>
                    <div className='col-md-6'>
                        <div className="input-group inv1">
                            <input type="text" className="form-control" placeholder="Search for a product"></input>
                            <div className="input-group-append">
                                <button className="btn btn-secondary btninv" type="button" style={{background:' linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)'}}>
                                    <i><AiOutlineSearch /></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
              
                <table class=" container table table-striped tableinventory"style={{width:'96%'}}>
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
            </div>
        );
    }
}
export default Inventory;