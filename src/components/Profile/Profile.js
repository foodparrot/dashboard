import React, { useRef, useState } from 'react';
import './Profile.css';
import Outlet from '../outlet/outlet';
import { FiHome } from 'react-icons/fi';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Container, SelectContainer, Label } from './style'
import { useUserStore } from '../../stores'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import parseNumber from "libphonenumber-js";
// import { Label, Input, Spacing, Button, Flex } from './styles';
// import Select, { components } from 'react-select';
const toastOptions = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
function Profile() {
  // const [user,setUser]=useState({firstName:"",lastName:"",countryCode:"",mobile:"",password:"",currentPassword:""})
  const profileRef = useRef(null);
  const passwordRef=useRef(null);
  const [pass,setPass]=useState("");
  const {email,firstName,lastName,contact:{number,country,national}} = useUserStore((state) => state.data);
  const [mobile, setMobile] = useState({ countryCode: country, number: number });
  
  const login =useUserStore((state)=>state.login);

  const handleProfile = async (e) => {
    e.preventDefault();
    const children = Array.from(profileRef.current.elements);
    const allValid = children.every(node => node.reportValidity());
    if(!allValid){
      return toast.error("incorrect infromation detected",toastOptions);
    }
    const contact = profileRef.current.querySelector("[name='contact'");
    const contactInfo = parseNumber(mobile.number, mobile.countryCode.toUpperCase());
    if (!mobile.number || !contactInfo || (contactInfo && !contactInfo.isPossible())) {
       contact.setCustomValidity("Please type valid number");
       contact.reportValidity();
       return contact.setCustomValidity("Please type valid number");
    }
    // console.log(profileRef.current.elements);
    console.log({
      "number": mobile.number,
      "country": mobile.countryCode,
      "firstName": profileRef.current.elements['fullname'],
      "lastName": profileRef.current.elements['lastname']
    });
    try {
      const r = await fetch("/api/business/profile", {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "number": mobile.number,
          "country": mobile.countryCode,
          "firstName": profileRef.current.elements['fullname'].value,
          "lastName": profileRef.current.elements['lastname'].value
        })
      });
      if (r.status == 200) {
        console.log("sucess")
        const res  = await r.json();
        login(res.user);
        toast.success("Account information updated", toastOptions);
        profileRef.current.reset();
      }
      else{
        toast.error("something went wrong", toastOptions);
      }
    } catch (error) {
      console.log("error", error.message)
    }

  }
  const handlePassword = async (e) => {
    e.preventDefault();
    const children = Array.from(passwordRef.current.elements);
    const allValid = children.every(node => node.reportValidity());
    if(!allValid){
      return toast.error("Incorrect information",toastOptions);
    }
    try {
      const r = await fetch("/api/business/profile", {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "password": passwordRef.current.elements['newPassword'].value,
          "currentPassword": passwordRef.current.elements['currentPassword'].value
        })
      });
      if (r.status === 200) {
        toast.success("password updated", toastOptions);
        passwordRef.current.reset();
      }
      else{
        const response=await r.json();

        toast.error(response.message, toastOptions);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong", toastOptions);
    }

  }
  console.log(profileRef)
  return (
    <div className="container">
      <ToastContainer position='top-center' />
      <div className="container-fluid row rowps-1">
        <p>Bismillah</p>
      </div>
      <div className="container-fluid ps">
        <p className="paraps">Profile</p>
        <div className="personal">
          <p className="para1">Personal Information</p>
          <div className="info">
            <div class="container">
              <form ref={profileRef} onSubmit={handleProfile}>
                <div class="row">
                  <div className="col-12 col-md-5 innercomponent">
                    <label>First name</label><br></br>
                    <input className="input1" type="text" required name="fullname" id="full_name" placeholder="Enter your full name here" defaultValue={firstName}/>
                  </div>
                  <div className="col-12 col-md-5 innercomponent">
                    <label>Last name</label><br></br>
                    <input className="input1" type="text" required name="lastname" id="last_name" placeholder="Enter your last name here" defaultValue={lastName}/>
                  </div>
                </div>
                <div class="row">
                  <div className="col-12 col-md-5 innercomponent">
                    <label>Email</label><br></br>
                    <input className="input1" type="text" disabled name="email" id="email" placeholder="Enter your email here" value={email} />
                  </div>
                  <div className="col-12 col-md-5 innercomponent">
                    {/* <label>Mobile</label><br></br> */}
                    {/* <input className="input1" type="text" name="mobile" id="mobile" placeholder="Enter your number here" /> */}

                    <label for="countryCode">
                      Mobile number
                    </label>

                    <SelectContainer>
                      <PhoneInput
                        country={mobile.countryCode}
                        onlyCountries={['in']}
                        autoComplete="off"
                        name="contact"
                        inputProps={{ required: "true", name: "contact" }}
                        value={mobile.number}
                        
                        onChange={(value, data, event, formattedValue) => {
                          setMobile({ countryCode: data.countryCode, number: "+" + value });
                          event.target.setCustomValidity("");
                        }}
                      />
                    </SelectContainer>

                  </div>
                </div>
                <div class="row button">
                  <div className="innercomponent ebtn">
                    <br></br>
                    <button className="upbtn sparabtn" type='submit'>Update Info</button>
                  </div>
                </div>
                </form>
            </div>
          </div>
        </div>
        <hr className="border"></hr>
        {/* security */}
        <div className="security">
          <p className="para1">Security</p>
          <div className="info">
            <div class="container">
              <form ref={passwordRef}>
              <div class="row">
                <div className="col-sm innercomponent">
                  <label> Current password </label><br></br>
                  <input className="input1" type="password" pattern={`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`}
                    title="At least 1 Uppercase,1 Lowercase,1 Number,1 Symbol, symbol allowed --> !@#$%^&*_=+-,Min 8 chars and Max 12 chars" required name='currentPassword' placeholder="Enter your old password here"></input>
                </div>
              </div>
              <div class="row">
                <div className="col-sm innercomponent">
                  <label>New password</label><br></br>
                  <input className="input1" type="password" required pattern={`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$`}
                    title="At least 1 Uppercase,1 Lowercase,1 Number,1 Symbol, symbol allowed --> !@#$%^&*_=+-,Min 8 chars and Max 12 chars" name="newPassword" placeholder="Enter your new password here" onChange={(e)=>{setPass(e.target.value)}}></input>
                </div>
              </div>
              <div class="row">
                <div className="col-sm innercomponent">
                  <label>Confirm password</label><br></br>
                  <input className="input1" type="password" required pattern={`${pass}`} placeholder="Enter your new password again"></input>
                </div>
              </div>
              <div class="row button">
                <div className="innercomponent ebtn">
                  <br></br>
                  <button className="upbtn sparabtn" onClick={handlePassword}>Update Password</button>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
        <hr className="border"></hr>
        <p className="para1">Role</p>
        <div className="info">
          <div class="container">
            <span className="rest"><FiHome className="home" /><p className="para1 r1">Bismillah Restuarant</p></span>
            <p className="para1 acc">Account Owner</p>

            <div className="container role1">
              <div className="row">
                <div className="col-12 col-md-5 inneroutlet">
                  <Outlet imgSrc='\images\outlet1.jpg' restaurant="Bismillah Restaurant" area="Lalitha Nagar" />
                </div>
                <div className="col-12 col-md-5 inneroutlet">
                  <Outlet imgSrc='\images\outlet2.jpg' restaurant="Bismillah Restaurant" area="Dwaraka Nagar " />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-5 inneroutlet">
                  <Outlet imgSrc='\images\outlet3.jpg' restaurant="Bismillah Restaurant" area="SriNagar" />
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