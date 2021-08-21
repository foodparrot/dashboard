import React from 'react';
import './CreateOutlet3.css';
import {Link} from 'react-router-dom';

const CreateOutlet3 = () => {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="row innerB">
            <div className="col-12 col-sm-3 sideBar">
                  <p className="create1 c2">Create an Outlet</p>
                  <div className="sidebarOptn">
                  <form>
                   <div className="optn">
                   <Link to={"/createoutlets1"} className="txt1" style={{border: 'none'}}><input type="radio" id="automatic" name="application_name" value="basic information" />
                    <label className="code2 color3" for="automatic">Basic Information</label>
                    </Link>
                   </div>
                   <div className="optn">
                   <Link to={"/createoutlets2"} className="txt1" style={{border: 'none'}}><input type="radio" id="manual" name="application_name" value="address"/>
                    <label className="code2 color3" for="manual">Address</label>
                    </Link>
                   </div>
                   <div className="optn">
                    <input type="radio" id="hidden_code" name="application_name" value="ordering modes" checked/>
                    <label className="code2 color color3" for="hidden_code">Ordering Modes</label>
                   </div>
                  </form>
                  </div>
            </div>
            <div className="col inner innerC">
              <div className="mainContent">
                  <div className="row">
                    <div className="col-12">
                      <p className="create1 create6">Payment Methods</p>
                      <div className="paym">
                       <form>
                        <div className="optn1">
                          <input type="checkbox" id="automatic" name="payment_method" value="cash_on_delivery" checked />
                          <label className="code2 color color3" for="automatic">Cash On Delivery</label>
                        </div>
                        <div className="optn1">
                          <input type="checkbox" id="manual" name="payment_method" value="cash_on_delivery" />
                          <label className="code2 color4" for="manual">Cash On Delivery</label>
                        </div>
                       </form>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                       <p className="create1">Opening Hours</p>
                       <p className="ophr">Set the hours your outlet open for delivery</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                       <p className="create1">Operational Settings</p>
                       <p className="ophr">Set the default time to prepare an order</p>
                    </div>
                  </div>
                  <div class="row create2">
                    <div className="col-12 col-md-6 innercomponent time">
                        <label>Preparation Time (Minutes)</label><br></br>
                        <input className="input1" type="text" name="preparation_time" id="time_prep" placeholder="Enter time here" />
                    </div>
                    <div className="col-12 col-md-6 innercomponent time">
                        <label>Preparation + Delivery Time (Minutes)</label><br></br>
                        <input className="input1" type="text" name="preparation+delivery_time" id="time_prep+delivery" placeholder="Enter time here" />
                    </div>
                  </div>
                  <div class="row button buttonS">
                    <div className="innercomponent ebtn">
                           <br></br>
                        <button className="upbtn sparabtn">Save Changes</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default CreateOutlet3;