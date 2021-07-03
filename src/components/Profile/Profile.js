import React from 'react';
import './Profile.css';
import Outlet from '../outlet/outlet';

function Profile() {
    return (
        <div>
            <p className="para">Bismillah Restuarant</p>

            <div className="inner">

                <div className="personal">
                   <p className="para1">Personal Information</p>
                 <div className="info">
                  <div class="container">
                   <div class="row">
                    <div className="col-sm innercomponent">
                        <label>Full name</label><br></br>
                        <input className="input1" type="text" name="fullname" id="full_name" placeholder="Enter your name here" />
                    </div>
                    <div className="col-sm innercomponent">
                        <label>Mobile</label><br></br>
                        <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your number here" />
                    </div>
                    </div>
                    <div class="row">
                    <div className="col-sm innercomponent">
                        <label>Email</label><br></br>
                        <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your email here" />
                    </div>
                    </div>
                    <div class="row button">
                    <div className="innercomponent ebtn">
                           <br></br>
                        <button className="upbtn sparabtn">Update Info</button>
                    </div>
                    </div>
                  </div>
                 </div>
                </div>
            <hr className="border"></hr>
                <div className="security">
                    <p className="para1">Security</p>
                    <div className="info">
                     <div class="container">
                      <div class="row">
                        <div className="col-sm innercomponent">
                          <label> Current password </label><br></br>
                          <input className="input1" type="password" placeholder="Enter your old password here"></input>
                        </div>
                      </div>
                      <div class="row">
                        <div className="col-sm innercomponent">
                          <label>New password</label><br></br>
                          <input className="input1" type="password" placeholder="Enter your new password here"></input>
                        </div>
                      </div>
                      <div class="row">
                        <div className="col-sm innercomponent">
                          <label>Comfirm password</label><br></br>
                          <input className="input1" type="password" placeholder="Enter your new password again"></input>
                        </div>
                      </div>
                      <div class="row button">
                        <div className="innercomponent ebtn">
                           <br></br>
                          <button className="upbtn sparabtn">Update Password</button>
                        </div>
                      </div>
                     </div>
                    </div>
                </div>
                <div>
            <hr className="border"></hr>
                  <p className="para1">Role</p>
                    <div className="info">
                      <div class="container">
                        <p className="para1 r1">Bismillah Restuarant</p>
                        <p className="para1 acc">Account Owner</p>

                        <div className="container role1">
                          <div className="row">
                            <div className="col-12 col-md-5 inneroutlet">
                              <Outlet imgSrc='\images\outlet1.jpg' restaurant="Bismillah Restaurant" area="Lalitha Nagar"/>
                            </div>
                            <div className="col-12 col-md-5 inneroutlet">
                              <Outlet imgSrc='\images\outlet2.jpg' restaurant="Bismillah Restaurant" area="Dwaraka Nagar "/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12 col-md-5 inneroutlet">
                              <Outlet imgSrc='\images\outlet3.jpg' restaurant="Bismillah Restaurant" area="SriNagar"/>
                            </div>
                            <div className="col-sm addoutlet">
                               <p>Add New Outlet</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Profile;