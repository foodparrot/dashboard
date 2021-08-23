import React from 'react';
import './CreateOutlet2.css';
import {Link} from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const CreateOutlet2 = () => {
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
                    <input type="radio" id="manual" name="application_name" value="address" checked />
                    <label className="code2 color color3" for="manual">Address</label>
                   </div>
                   <div className="optn">
                   <Link to={"/createoutlets3"} className="txt1" style={{border: 'none'}}><input type="radio" id="hidden_code" name="application_name" value="ordering modes" />
                    <label className="code2 color3" for="hidden_code">Ordering Modes</label>
                    </Link>
                   </div>
                  </form>
                  </div>
            </div>
            <div className="col inner innerC">
              <div className="mainContent">
                <p className="create1">Address</p>
                  <div class="row create2 create4">
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Location</label><br></br>
                        <FiSearch style={{fontSize:"1em", position:'absolute', color: '#828282', margin:'12px 0px 10px 10px',zIndex: 2 ,left:'20px'}}/>
                        <input className="input1 srch" type="text" name="location" id="location" placeholder="Enter your location here" />
                    </div>
                  </div>
                  <div>
                      <div className="col-10">
                          <img className="img-fluid" src='\images\map.jpg'/>
                      </div>
                  </div>
                  <div class="row create2 create5">
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Address</label><br></br>
                        <input className="input1" type="text" name="address" id="Address" placeholder="Enter your address here" />
                    </div>
                    <div className="col-12 col-md-5 innercomponent">
                        <label>Area</label><br></br>
                        <input className="input1" type="text" name="Area" id="area" placeholder="Enter your area here" />
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

export default CreateOutlet2;