import React, { Component } from 'react';
import '../PauseOrders/PauseOrders.css';
export class PauseOrders extends Component {
    render() {
        return (
            <div className='container'>
                <div className='container-fluid row rowps-1'>
                    <p>Bismillah Outlet</p>          
                </div>
                <div className='container ps'>
                    <p className='paraps'>Pause New Orders</p>
                    <div className='card border-dark cardps1'>
                        <div className='card-body cardps11'>
                            <div className='disp'>
                                <div className='col-12 col-md-6'>
                                    Bismillah outlet1
                                </div>
                                <div className='disp1'>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
                                        <label class="form-check-label" for="inlineRadio1">Delivery</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                        <label class="form-check-label" for="inlineRadio2">Pickup</label>
                                    </div>
                                </div>
                            </div>
                            {/* toggler switch */}
                            <div class="row swtch">
                                <div class="col-4 col-lg-3">
                                <label class="switch">
                                    <input type="checkbox" id="togBtn"></input>
                                    <div class="slider"></div>
                                    </label>
                                </div>
                                <div class="col-8 col-lg-9">
                                    <p>Accepting Delivery Orders</p>
                                </div>
                            </div>

                            <div class="row swtch">
                                <div class="col-4 col-lg-3">
                                <label class="switch">
                                    <input type="checkbox" id="togBtn"></input>
                                    <div class="slider"></div>
                                    </label>
                                </div>
                                <div class="col-8 col-lg-9">
                                    <p>Accepting Pickup Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    {/* 2nd card */}
                    <div className='gapps'></div>
                        <div className='col-12 card border-dark cardps1'>
                            <div className='card-body'>
                                <p style={{fontSize:'1.2em',fontWeight:'600'}}>Test Hardwares</p>
                                <button type="button" class="btn btn-secondary btnps">Sound</button>
                            </div>
                        </div>
                </div>
            </div>
            
        );
    }
}
export default PauseOrders

