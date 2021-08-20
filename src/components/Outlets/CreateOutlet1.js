import React from 'react';
import './CreateOutlet1.css';
import {FiCamera} from 'react-icons/fi';
import {HiOutlinePencilAlt} from 'react-icons/hi';


const CreateOutlet1 = () => {
    return(
        <div>
          <p className="heading">Bismillah Restuarant</p>
          <div className="innerB">
            <div className="sideBar">
                  <p className="create1 c2">Create an Outlet</p>
                  <div className="sidebarOptn">
                  <form>
                   <div>
                    <input type="radio" id="automatic" name="application_name" value="automatic" checked />
                    <label className="code2 color color3" for="automatic">Basic Information</label>
                   </div>
                   <div>
                    <input type="radio" id="manual" name="application_name" value="manual" />
                    <label className="code2 color3" for="manual">Address</label>
                   </div>
                   <div>
                    <input type="radio" id="hidden_code" name="application_name" value="hidden_code" />
                    <label className="code2 color3" for="hidden_code">Ordering Modes</label>
                   </div>
                  </form>
                  </div>
            </div>
            <div className="inner innerC">
              <div className="mainContent">
                <p className="create1">Basic Information</p>
                  <div class="row create2">
                    <div className="innercomponent createInner">
                        <p className="images">Cover Image<FiCamera style={{fontSize: '1.3em', marginLeft: 130, color: '#828282'}}  /><HiOutlinePencilAlt style={{fontSize: '1.5em', marginLeft: 50, color: '#828282'}} /></p>
                        <img className="outletimg" src='\images\CreateOutlet.jpg' />
                    </div>
                  </div>
                  <div class="row create2 create3">
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Outlet Name</label><br></br>
                        <input className="input1" type="text" name="fullname" id="full_name" placeholder="Enter your name here" />
                    </div>
                  </div>
                <p className="create1">Contact Information</p>
                  <div class="row create2">
                    <div className="col-12 col-md-6 innercomponent">
                        <label>Email</label><br></br>
                        <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your email here" />
                    </div>
                    <div className="col-12 col-md-6 innercomponent">
                        <label>Phone Number</label><br></br>
                        <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your number here" />
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