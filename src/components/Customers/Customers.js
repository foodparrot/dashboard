import React, { Component } from 'react';
import '../Customers/Customers.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleDoubleLeft} from "react-icons/fa";
import { FaAngleDoubleRight} from "react-icons/fa";
export class Customers extends Component {
    render() {
        return (

                <div className='container-fluid'>

                    <div className='container-fluid row row31'>
                        <p>Bismillah Outlet</p>
                    </div>
                    <div className='container-fluid customers'>
                    <div className='container p1'>
                        Customers
                    </div>

                    <div className='container-fluid box boxs'>
                        <form action=''>
                            <div className='row formgrp'>

                                <div className='col-12 col-sm-4 c-inp'>
                                    <div className='form-group'>
                                        <label for='name'>Name</label>
                                        <input type='text' name='name' id='name' class='form-control'style={{width:'100%'}}></input>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4 c-inp'>
                                    <div className='form-group'>
                                        <label for='email'>Email</label>
                                        <input type='email' name='email' id='email' class='form-control'></input>
                                    </div>
                                </div>

                                <div className='col-12 col-sm-4 c-inp1'>
                                    <div className='form-group form3'>
                                        <label for="phone">Phone</label>
                                        <input className='col-12' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class='form-control'/>
                                        {/* <div className='searchicon'><AiOutlineSearch size={20}/></div> */}
                                    </div>
                                </div>
                                <div className="searchicon col-12" style={{display:"flex",justifyContent:"center"}}><button type="button" class="btn btn-primary"  style={{background:'linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)',border:"none",padding:"8px 5%"}}>Search</button></div>
                                <div className='searchbtn'>
                                <button type="button" class="btn btn-primary"  style={{background:'linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)'}}>Search</button>

                                </div>

                            </div>
                        </form>
                    </div>
                    <div className='gap12'>
                        <div class="table-responsive cust-borderless">

                            <table class="table customers-table" style={{fontWeight:'600'}}>
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
                                    <tr style={{background:'white'}}>
                                    <td>Azhar</td>
                                    <td><a href="tel:=917997289947">+917997289947</a></td>
                                    <td>4</td>
                                    <td>Sep 27,<br></br>2020</td>
                                    <td >Sep 27,<br></br>2020</td>
                                    <td>₹555.00</td>
                                    </tr>

                                    <tr  style={{background:'#D7D4D1'}}>
                                    <td>Srikar</td>
                                    <td><a href="tel:+916303065650">+916303065650</a></td>
                                    <td>1</td>
                                    <td>Sep 27,<br></br>2020</td>
                                    <td >Sep 27,<br></br>2020</td>
                                    <td>₹5.00</td>
                                    </tr>

                                    <tr style={{background:'white'}}>
                                    <td colSpan='6' className='leftalign'>Showing from 1 to 2 of 2 records
                                    <div className='bttnarrow'>
                                        <button type="button" class="btn btn-outline-dark cust-btn-1"  style={{background:'white',margin:'0 2% 0 0',boxShadow:'0 2px 2px gray'}}><FaAngleDoubleLeft/></button>
                                        <button type="button" class="btn btn-outline-dark cust-btn-2" style={{background:'linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)',margin:'0 2% 0 0',width:'30%',
                                        boxShadow:'0 2px 2px gray',border:'none'}}>1</button>
                                        <button type="button" class="btn btn-outline-dark cust-btn-3" style={{background:'white',boxShadow:'0 2px 2px gray'}}><FaAngleDoubleRight/></button>
                                    </div></td>
                                    
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        
                    </div>
                    </div>
                </div>
            
        );
    }
}
export default Customers

