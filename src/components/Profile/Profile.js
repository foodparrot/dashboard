import React,{useRef,useState} from 'react';
import './Profile.css';
import Outlet from '../outlet/outlet';
import { FiHome } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Container, SelectContainer,Label} from './style'
// import { Label, Input, Spacing, Button, Flex } from './styles';
// import Select, { components } from 'react-select';

function Profile() {
  // const [user,setUser]=useState({firstName:"",lastName:"",countryCode:"",mobile:"",password:"",currentPassword:""})
  const handleProfile=()=>{

  }
  const handlePassword=()=>{

  }
  return (
    <div className="container">
      <div className="container-fluid row rowps-1">
        <p>Bismillah</p>
      </div>
      <div className="container ps">
        <p className="paraps">Profile</p>
        <div className="personal">
          <p className="para1">Personal Information</p>
          <div className="info">
            <div class="container">   
              <div class="row">
                <div className="col-12 col-md-5 innercomponent">
                  <label>First name</label><br></br>
                  <input className="input1" type="text" name="fullname" id="full_name" placeholder="Enter your full name here" />
                </div>
                <div className="col-12 col-md-5 innercomponent">
                  <label>Last name</label><br></br>
                  <input className="input1" type="text" name="lastname" id="last_name" placeholder="Enter your last name here" />
                </div>
              </div>
              <div class="row">
                <div className="col-12 col-md-5 innercomponent">
                  <label>Email</label><br></br>
                  <input className="input1" type="text" name="email" id="email" placeholder="Enter your email here" />
                </div>
                <div className="col-12 col-md-5 innercomponent">
                  {/* <label>Mobile</label><br></br> */}
                  {/* <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your number here" /> */}
                  
                        <label for="countryCode">
                            Mobile number
                        </label>
                        
                        <SelectContainer>
                            <PhoneInput
                                country='in'
                                onlyCountries={['in']}
                                autoComplete="off"
                                name="countryCode"
                                inputProps={{ required: "true", name: "contact" }}
                                onChange={(value, data, event, formattedValue) => {
                                    setUser({ ...user, countryCode: data.countryCode, number: "+" + value });
                                    event.target.setCustomValidity("");
                                }}
                            />
                        </SelectContainer>
                  
                </div>
              </div>
              <div class="row button">
                <div className="innercomponent ebtn">
                  <br></br>
                  <button className="upbtn sparabtn" onClick={handleProfile}>Update Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="border"></hr>
        {/* security */}
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
                      <label>Confirm password</label><br></br>
                      <input className="input1" type="password" placeholder="Enter your new password again"></input>
                    </div>
                  </div>
                  <div class="row button">
                    <div className="innercomponent ebtn">
                       <br></br>
                      <button className="upbtn sparabtn" onClick={handlePassword}>Update Password</button>
                    </div>
                  </div>
                 </div>
                </div>
            </div>
        <hr className="border"></hr>
        <p className="para1">Role</p>
                <div className="info">
                  <div class="container">
                    <span className="rest"><FiHome className="home"/><p className="para1 r1">Bismillah Restuarant</p></span>
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
                        <div className="col-12 col-md-5 inneroutlet addoutlet">
                            <p className="add">Add New Outlet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        <div className="gapps"></div>
      </div>
    </div>
  );
}
export default Profile;