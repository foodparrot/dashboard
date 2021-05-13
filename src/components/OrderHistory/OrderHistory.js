import React, { Component } from 'react';
import '../OrderHistory/OrderHistory.css';
export class OrderHistory extends Component {
    render() {
        return (
                <div className='container-fluid os'>
                    <div className='upperdiv'>
                        <p>Bismillah Outlet!</p>
                    </div>
                    <div className='col-12 col-md-6 po1'>
                        Customers
                    </div>
                    {/* Form */}
                    <div className='box boxstyling'>
                        <form action=''>
                            <div className='row formgrping'>
                                <div className='col-12 col-sm-3 gapoh'>
                                    <input type='text' name='name' id='name' class='form-control gapoh1'placeholder='ID'></input>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                    <input className='col-12' type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class='form-control gapoh1' placeholder='Phone No'/>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                    <input list='outlets' class='form-control gapoh1'placeholder='Outlet'></input>
                                        <datalist id="outlets">
                                            <option value="outlet-1"></option>
                                            <option value="outlet-2"></option>
                                            <option value="outlet-3"></option>
                                        </datalist>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                    <input type='Date' class='form-control gapoh1'placeholder='Date'></input>
                                </div>
                                <div className='col-12 col-sm-6 gapoh'>
                                <input list='os' class='form-control gapoh1'placeholder='Order Status'></input>
                                        <datalist id="os">
                                            <option value="Being packed"></option>
                                            <option value="Out to be delivered"></option>
                                            <option value="Food is being prepared"></option>
                                        </datalist>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                <input list='channel' class='form-control gapoh1'placeholder='Channel'></input>
                                        <datalist id="channel">
                                            <option value="Channel-1"></option>
                                            <option value="Channel-2"></option>
                                            <option value="Channel-3"></option>
                                        </datalist>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                <input list='type' class='form-control gapoh1'placeholder='Type'></input>
                                        <datalist id="type">
                                            <option value="Type-1"></option>
                                            <option value="Type-2"></option>
                                            <option value="Type-3"></option>
                                        </datalist>
                                </div>
                                <div className='col-12 col-sm-6 gapoh'>
                                <input list='payment' class='form-control gapoh1'placeholder='Payment'></input>
                                        <datalist id="payment">
                                            <option value="Type-1"></option>
                                            <option value="Type-2"></option>
                                            <option value="Type-3"></option>
                                        </datalist>
                                </div>
                                <div className='col-12 col-sm-3 gapoh'>
                                    <button type="button" class="btn btn-outline-success colorchange ">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Table*/}
                    <div className='gapoh2'>
                        <div className='table-responsive'>
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Channel</th>
                                    <th scope="col">Order at</th>
                                    <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>Srikar</td>
                                    <td><a href="tel:+916303065650">+916303065650</a></td>
                                    <td>Type-1</td>
                                    <td>COD</td>
                                    <td>₹200.00</td>
                                    <td>Channel-1</td>
                                    <td>Outlet</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>Srikar</td>
                                    <td><a href="tel:+916303065650">+916303065650</a></td>
                                    <td>Type-1</td>
                                    <td>COD</td>
                                    <td>₹200.00</td>
                                    <td>Channel-1</td>
                                    <td>Outlet</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>0</td>
                                    <td>Srikar</td>
                                    <td><a href="tel:+916303065650">+916303065650</a></td>
                                    <td>Type-1</td>
                                    <td>COD</td>
                                    <td>₹200.00</td>
                                    <td>Channel-1</td>
                                    <td>Outlet</td>
                                    <td>4</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        );
    }
}
export default OrderHistory