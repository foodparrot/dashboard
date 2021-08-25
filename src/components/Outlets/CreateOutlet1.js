import React from 'react';
import './CreateOutlet1.css';
import {FiCamera} from 'react-icons/fi';
import {HiOutlinePencilAlt} from 'react-icons/hi';
import {Link} from 'react-router-dom';

const CreateOutlet1 = () => {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="row innerB">
            <div className="col-12 col-sm-3 sideBar">
                  <p className="create1 c2">Create an Outlet</p>
                  <div className="sidebarOptn">
                  <form>
                   <div className="optn">
                    <input type="radio" id="Basic_Information" name="basic_info" value="basic information" checked />
                    <label className="code2 color color3">Basic Information</label>
                   </div>
                   <div className="optn">
                   <Link to={"/createoutlets2"} className="txt1" style={{border: 'none'}}> <input type="radio" id="address" name="address" value="address" />
                    <label className="code2 color3">Address</label>
                    </Link>
                   </div>
                   <div className="optn">
                   <Link to={"/createoutlets3"} className="txt1" style={{border: 'none'}}><input type="radio" id="ordering_modes" name="ordering_modes" value="ordering modes" />
                    <label className="code2 color3">Ordering Modes</label>
                    </Link>
                   </div>
                  </form>
                  </div>
            </div>
            <div className="col inner innerC">
              <div className="mainContent">
                <p className="create1">Basic Information</p>
                  <div class="row create2">
                    <div className="col-12 innercomponent createInner">
                        <p className="images">Cover Image<FiCamera style={{fontSize: '1.3em', marginLeft: "20%", color: '#828282'}}  /><HiOutlinePencilAlt style={{fontSize: '1.5em', marginLeft: "7%", color: '#828282'}} /></p>
                        <img className="img-fluid outletimg" src='\images\CreateOutlet.jpg' />
                    </div>
                  </div>
                  <div class="row create2 create3">
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Outlet Name</label><br></br>
                        <input className="input1" type="text" name="outlet_name" id="outletname" placeholder="Enter your name here" />
                    </div>
                  </div>
                <p className="create1">Contact Information</p>
                  <div class="row create2">
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Email</label><br></br>
                        <input className="input1" type="text" name="email" id="Email" placeholder="Enter your email here" />
                    </div>
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Phone Number</label><br></br>
                        <input className="input1" type="text" name="phone_number" id="phoneNumber" placeholder="Enter your number here" />
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

export default CreateOutlet1;