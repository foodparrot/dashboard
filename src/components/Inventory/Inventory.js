import React, { Component } from "react";
import "../Inventory/Inventory.css";
import { AiOutlineSearch } from "react-icons/ai";
import Switch from "react-switch";
export class Inventory extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid row rowps-1">
          <p>Bismillah</p>
        </div>
        <div className=" container-fluid upperdivInv">
          <p className="paraps">Inventory</p>
          <div class="form-group col-12 col-md-4">
            <label for="selectOutletToPause" style={{ whiteSpace: "nowrap" }}>
              Select outlet
            </label>

            <select
              class="form-select mb-2"
              aria-label="Default select example"
            >
              <option value="1">Outlet 1</option>
              <option value="2">Outlet 2</option>
              <option value="3">Outlet 3</option>
            </select>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="input-group inv1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a product"
                ></input>

                <button
                  className="btn btn-secondary input-group-text"
                  type="button"
                  style={{
                    background:
                      " linear-gradient(94.08deg, #FFE13B 0.84%, #FF2525 115.93%)",
                    border: "none",
                  }}
                >
                  <i>
                    <AiOutlineSearch />
                  </i>
                </button>
              </div>
            </div>
          </div>

          <table
            class=" container table table-striped tableinventory"
            style={{ width: "96%" }}
          >
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">MRP</th>
                <th scope="col">Selling Price</th>
                <th scope="col">Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">Dosa</td>
                <td>30/-</td>
                <td>30/-</td>
                <td>
                  <Switch onChange={this.handleChange} checked={true} />
                </td>
              </tr>

              <tr>
                <td scope="row">Dosa</td>
                <td>30/-</td>
                <td>30/-</td>
                <td>
                  <Switch onChange={this.handleChange} checked={true} />
                </td>
              </tr>

              <tr>
                <td scope="row">Dosa</td>
                <td>30/-</td>
                <td>30/-</td>
                <td>
                  <Switch onChange={this.handleChange} checked={true} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Inventory;
