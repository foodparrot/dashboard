import React, { Component } from 'react';
import '../Customers/Customers.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDoubleLeft} from "react-icons/fa";
import { FaAngleDoubleRight} from "react-icons/fa";
export class Customers extends Component {
    render() {
        return (
        
                <div className='container'>

                    <div className='row row31'>
                        <p>Bismillah Outlet</p>          
                    </div>

                    <div className='col-12 col-md-6 p1'>
                        Customers
                    </div>

                    <div className='box boxs'>
                        <form action=''>
                            <div className='row formgrp'>

                                <div className='col-12 col-sm-4'>
                                    <div className='form-group'>
                                        <label for='name'>Name</label>
                                        <input type='text' name='name' id='name' class='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4'>
                                    <div className='form-group'>
                                        <label for='email'>Email</label>
                                        <input type='email' name='email' id='email' class='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4'>
                                    <div className='form-group form3'>
                                        <label for="phone">Phone</label>
                                        <input className='col-12' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class='form-control'/>
                                        <div className='searchicon'><AiOutlineSearch/></div>
                                    </div>
                                </div>
                                <div className='searchbtn'>
                                <button type="button" class="btn btn-primary">Search</button>

                                </div>

                            </div>
                        </form>
                    </div>
                    <div className='gap12'>
                        <div class="table-responsive">
                            
                            <table class="table t">
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone No</th>
                                    <th scope="col">Orders placed</th>
                                    <th scope="col">First order<br></br>placed at</th>
                                    <th scope="col">Last order<br></br>placed at</th>
                                    <th scope="col">Total Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Azhar</td>
                                    <td><a href="tel:=917997289947">+917997289947</a></td>
                                    <td>4</td>
                                    <td>Sep 27,<br></br>2020</td>
                                    <td >Sep 27,<br></br>2020</td>
                                    <td>₹555.00</td>
                                    </tr>

                                    <tr>
                                    <td>Srikar</td>
                                    <td><a href="tel:+916303065650">+916303065650</a></td>
                                    <td>1</td>
                                    <td>Sep 27,<br></br>2020</td>
                                    <td >Sep 27,<br></br>2020</td>
                                    <td>₹5.00</td>
                                    </tr>

                                    <tr>
                                    <td colSpan='6' className='leftalign'>Showing from 1 to 2 of 2 records
                                    <div className='bttnarrow'>
                            <button type="button" class="btn btn-outline-dark"><FaAngleDoubleLeft/></button>
                            <button type="button" class="btn btn-outline-primary">1</button>
                            <button type="button" class="btn btn-outline-dark"><FaAngleDoubleRight/></button>
                        </div></td>
                                    
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        
                    </div>
                
                </div>
            
        );
    }
}
export default Customers

