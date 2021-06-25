import React from 'react';
import './Profile.css';
function Profile() {
    return (
        <div>
            <p className="para">Bismillah Restuarant</p>
            <div className="inner">
                <p className="para">Personal Information</p>
                <div className="info">
                    <div className="innercomponent">
                        <label>Full name</label><br></br>
                        <input type="text" name="fullname" id="full_name" />
                    </div>
                    <div className="innercomponent">
                        <label>Mobile</label><br></br>
                        <input type="text" name="mobile" id="mobile" />
                    </div>
                    <div className="innercomponent">
                        <br></br>
                        <button className="upbtn">UPDATE INFO</button>
                    </div>
                </div>
                <div >
                    <p className="epara">
                        Email
                        <p className="empara">
                            Your Email address is { }
                        </p>
                    </p>
                </div>
                <div className="security">
                    <p className="para">
                        Security
                    </p>
                    <label className="epara">
                        Current password
                    </label>
                    <input type="password" className="spass"></input>
                    <label className="epara">
                        New password
                    </label>
                    <input type="password" className="spass"></input>
                    <label className="epara">
                        Comfirm password
                    </label>
                    <input type="password" className="spass"></input>
                    <button className="upbtn sparabtn">UPDATE PASSWORD</button>
                </div>
                <div>
                    <p className="para">
                        Role
                    </p>
                    <div className="rolediv">
                        <p className="para">
                            Account Owner
                        </p>
                        <p className="epara"><strong>Bismillah Restuarant</strong></p>
                        <p className="empara" style={{ marginLeft: "30px" }}>Bismillah Outlet</p>
                        <p className="empara" style={{ marginLeft: "30px" }}>Shree NAgar Ext,Ravi nagar ,Indore,Madhya Pradesh,India</p>
                        <p className="empara" style={{ marginLeft: "30px" }}>Bismillah Outlet</p>
                        <p className="empara" style={{ marginLeft: "30px" }}>Shree NAgar Ext,Ravi nagar ,Indore,Madhya Pradesh,India</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Profile;