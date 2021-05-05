import React, { Component } from 'react'
import './Outlets.css';
export class Outlets extends Component {
    render() {
        return (
            <div>
        <div className="container">
                <div className="row fst">
                    <span className="out1 col">Outlets</span>
                    <input type="text" class="form-control txt1 col col-md-3" placeholder="Search outlet by name" />
                    <button type="button" class="btn col col-md-2 dis">Add new </button>
                </div>
        </div>
        <div className="tab0">
        <table class="tab1">
        <thead className="">
          <tr className="rw1">
            <th className="txt2">Outlet name</th>
            <th className="txt2">Status</th>
            <th className="txt2">Delivery</th>
            <th className="txt2">Pickup</th>
            <th className="txt2">Dine-in</th>
          </tr>
        </thead>
        <tbody className="tab2">
          <tr className="rw2">
            <th className="txt3"><div className="smeln"><img src="cdvbc"></img></div><div className="smeln">Bismillah Outlet</div></th>
            <th className="txt3">Active</th>
            <th className="txt3">Enable</th>
            <th className="txt3">Enable</th>
            <th className="txt3">Disable</th>
          </tr>
        </tbody>
        </table>
        </div>
        <div class="row rw0 container">
          <div className="col" >showing 1 out of 1 record</div>
           <button className="previous bn9">&laquo;</button>
           <button className="middle bn9">1</button>
           <button className="previous bn9">&raquo;</button>
        </div>
        </div>
        )
    }
}

export default Outlets
