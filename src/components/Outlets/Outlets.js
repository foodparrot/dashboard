import React, { Component } from 'react'
import './Outlets.css';
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import Switch from "react-switch";
import {Link} from 'react-router-dom';
export class Outlets extends Component {
  render() {
    return (
      <div className="conatiner-fluid" >
          <div className="outletspalete">
            <div className="container">
              <div className="row fst">
                <span className="out1 col">Outlets</span>
                <input type="text" class="form-control txt1 col col-md-3" placeholder="Search outlet by name" />
                <Link to={"/createoutlets1"} className="txt1" style={{border: 'none'}}><button type="button" class="btn col dis">Add new </button></Link>
              </div>
            </div>
            <div className="tab9 table-responsive" style={{borderRadius:"10px"}}>
              <table class="table tab1">
                <thead >
                  <tr>
                  <th scope="col" className="txt2"></th>
                    <th scope="col" className="txt2">Outlet name</th>
                    <th scope="col" className="txt2">Status</th>
                    <th scope="col" className="txt2">Delivery</th>
                    <th scope="col" className="txt2">Pickup</th>
                    {/* <th scope="col" className="txt2">Dine-in</th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    <td className="txt3"><img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" style={{ width: "100px", height: "100px" }}></img></td>
                    <td className="txt3" style={{ whiteSpace: "nowrap" }}>Bismillah Outlet</td>
                    <td className="txt3"><Switch onChange={this.handleChange} checked={true} /></td>
                    <td className="txt3"><Switch onChange={this.handleChange} checked={true} /></td>
                    <td className="txt3"><Switch onChange={this.handleChange} checked={true} /></td>                   
                    {/* <td className="txt3">Disable</td> */}
                  </tr>
                  <tr>
                    <td colSpan='6' className='leftalign'>Showing from 1 to 2 of 2 records
          <div className='bttnarrow'>
                        <button type="button" class="btn btn-outline-dark cust-btn-1" style={{ background: 'white', margin: '0 2% 0 0', boxShadow: '0 2px 2px gray' }}><FaAngleDoubleLeft /></button>
                        <button type="button" class="btn btn-outline-dark cust-btn-2" style={{
                          background: 'linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)', margin: '0 2% 0 0', width: '30%',
                          boxShadow: '0 2px 2px gray', border: 'none'
                        }}>1</button>
                        <button type="button" class="btn btn-outline-dark cust-btn-3" style={{ background: 'white', boxShadow: '0 2px 2px gray' }}><FaAngleDoubleRight /></button>
                      </div></td>

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    )
  }
}

export default Outlets
