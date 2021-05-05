import React, { Component } from 'react';
import '../Inventory/Inventory.css';
import { AiOutlineSearch } from "react-icons/ai";
import { GiPaddles } from 'react-icons/gi';
export class Inventory extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='upperdivInv'>
                    <p>Bismillah Outlet!</p>
                </div>
                <div class="btn-group dropright " style={{padding:'2% 0 '}}>
                    <button type="button" class="btn btn-secondary">
                        Outlet
                    </button>
                    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only"></span>
                    </button>
                    <div class="dropdown-menu">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Outlet-1</a></li>
                        <li><a class="dropdown-item" href="#">Outlet-2</a></li>
                        <li><a class="dropdown-item" href="#">Outlet-3</a></li>
                        <li><a class="dropdown-item" href="#">Outlet-4</a></li>
                    </ul>
                    </div>
                </div>
                
                <p>Inventory</p>
                <div className='row'>
                    <div className='col-md-9'>
                        <div className="input-group inv1">
                            <input type="text" className="form-control" placeholder="Search for a product"></input>
                            <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i><AiOutlineSearch/></i>
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 inv1'><p>Availability</p></div>                    
                </div>

                <hr></hr>
                <div className='row rowinv'>               
                    <p className='col-3'>Dosa</p>
                    <p className='col-3'>30/-</p>
                    <p className='col-1'></p>
                    <label class="switch swtchinv">
                    <input type="checkbox"></input>
                    <span class="sliderinv round"></span>
                    </label>
                </div>
                <hr></hr>
                <div className=' row rowinv'>               
                    <p className='col-3'>Noodles</p>
                    <p className='col-3'>50/-</p>
                    <p className='col-1'></p>
                    <label class="switch swtchinv">
                    <input type="checkbox"></input>
                    <span class="sliderinv round"></span>
                    </label>
                </div>
                <hr></hr>
            </div>
        );
    }
}
export default Inventory;