import React, { Component } from 'react';
import '../Inventory/Inventory.css';
import { AiOutlineSearch } from "react-icons/ai";
import Switch from "react-switch"
export class Inventory extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <p style={{ fontWeight: '500', fontSize: '1.3em' }}>Bismillah</p>
                <div className='upperdivInv'>



                    <div class="form-group col-12 col-md-4 pt-2">
                        <label for="selectOutletToPause" style={{ whiteSpace: "nowrap" }}>Select outlet</label>
                        <select class="form-control" id="selectOutletToPause">
                            <option>Outlet 1</option>
                            <option> Outlet 2</option>
                        </select>
                    </div>



                    <p className='container' style={{ fontSize: '1em', fontWeight: '600' }}>Inventory</p>
                    <div className='container row'>
                        <div className='col-md-6'>
                            <div className="input-group inv1">
                                <input type="text" className="form-control" placeholder="Search for a product"></input>
                                <div className="input-group-append">
                                    <button className="btn btn-secondary btninv" type="button" style={{ background: ' linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)' }}>
                                        <i><AiOutlineSearch /></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <table class=" container table table-striped tableinventory" style={{ width: '96%' }}>
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
                                <Switch onChange={this.handleChange} checked={true} />

                                </td>
                            </tr>

                            <tr>
                                <td scope="row">Dosa</td>
                                <td>30/-</td>
                                <td>
                                <Switch onChange={this.handleChange} checked={true} />

                                </td>
                            </tr>

                            <tr>
                                <td scope="row">Dosa</td>
                                <td>30/-</td>
                                <td>
                                <Switch onChange={this.handleChange} checked={true}/>

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