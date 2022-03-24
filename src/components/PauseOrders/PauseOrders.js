import React, { Component } from "react";
import "../PauseOrders/PauseOrders.css";
import Switch from "react-switch";

export class PauseOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delivery: true,
      pickup: false,
    };

  }
  render() {
    return (
      <div className="container">
        <div className="container-fluid row rowps-1">
          <p>Bismillah</p>
        </div>
        <div className="container ps">
          <p className="paraps">Pause New Orders</p>
          <div class="form-group col-12 col-md-4">
            <label for="selectOutletToPause" style={{ whiteSpace: "nowrap" }}>
              Select outlet
            </label>
            
            <select class="form-select mb-2" aria-label="Default select example">
              <option value="1">Outlet 1</option>
              <option value="2">Outlet 2</option>
              <option value="3">Outlet 3</option>
            </select>
          </div>
          <div className="card border-dark cardps1">
            <div className="card-body cardps11">
              <div className="disp">
                <div className="col-12 col-md-6">Bismillah outlet1</div>
                <div className="disp1">
                  {/* <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked></input>
                                        <label class="form-check-label" for="inlineRadio1">Delivery</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                        <label class="form-check-label" for="inlineRadio2">Pickup</label>
                                    </div> */}
                  <div class="radio-item">
                    <input
                      type="radio"
                      checked
                      id="ritema"
                      name="ritem"
                      value="ropt1"
                    ></input>
                    <label for="ritema">Delivery</label>
                  </div>

                  <div class="radio-item">
                    <input
                      type="radio"
                      id="ritemb"
                      name="ritem"
                      value="ropt2"
                    ></input>
                    <label for="ritemb">Pickup</label>
                  </div>
                </div>
              </div>
              {/* toggler switch */}
              <div class="row swtch">
                <div class="col-4 col-lg-3">
                  <Switch
                    onChange={(v) => this.setState({ delivery: v })}
                    id="delivery"
                    checked={this.state.delivery}
                  />
                </div>
                <div class="col-8 col-lg-9">
                  <p>Accepting Delivery Orders</p>
                </div>
              </div>

              <div class="row swtch">
                <div class="col-4 col-lg-3">
                  <Switch
                    onChange={(v) => this.setState({ pickup: v })}
                    id="pickup"
                    checked={this.state.pickup}
                  />
                </div>
                <div class="col-8 col-lg-9">
                  <p>Accepting Pickup Orders</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd card */}
          <div className="gapps"></div>
          <div className="col-12 card border-dark cardps1">
            <div className="card-body">
              <p style={{ fontSize: "1.2em", fontWeight: "600" }}>
                Test Hardwares
              </p>
              <button type="button" class="btn btn-secondary btnps">
                Sound
              </button>
            </div>
          </div>
          <div className="gapps"></div>
        </div>
      </div>
    );
  }
}
export default PauseOrders;
