import React, { Component } from 'react';
import './ImportMenu.css';
import { FiSearch } from 'react-icons/fi';
import MenusCard from '../MenusCard/MenusCard';
import { AiOutlineSearch } from "react-icons/ai";
export class ImportMenu extends Component {

  render() {
    const Checked = 'true';
    return (
      <div className="container">
        <div className="container-fluid row rowps-1">
          <p>Bismillah</p>
        </div>
        <div className="container ps">
          <p className="paraps">Create Menu</p>
          <div className="input-section">
            <div className="row inputs">
              <div className="col-sm-2">Name</div>
              <div className="col-12 col-md-6">
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="row inputs">
              <div className="col-sm-2">Notes</div>
              <div className="col-12 col-md-6">
                <textarea className="form-control"></textarea>
              </div>
            </div>
            <div class="row inputs">
              <div class="col-sm-2">
                <label for="selectOutletToPause" style={{ whiteSpace: "nowrap" }}>Select outlet</label>
              </div>
              <div className="col-12 col-md-6">
                <select class="form-select mb-2" aria-label="Default select example">
                  <option value="1">Outlet 1</option>
                  <option value="2">Outlet 2</option>
                  <option value="3">Outlet 3</option>
                </select>
              </div>
            </div>
            <div className="row inputs1">
            <div className="col-12 col-md-8">
              <div className="input-group inv1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for a category"
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
              <div className="col-12 col-md-2">
                <input type="checkbox" id="select all" name="select_all" value="select_all" />
                <label className="select-label" for="select all">Select All</label>
              </div>
              <div className="col-12 col-md-2">
                <label className="selected">1 Selected</label>
              </div>
            </div>
            <div className="container">
              <div className="row card-row" style={{ justifyContent: "space-around" }}>
                <MenusCard />
                <MenusCard checked={Checked} />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button type="button" class="grad mr-1 ml-0">Cancel</button>
              <button type="button" class="ml-1 btn btn-success">Import</button>
            </div>
          </div>
          <div className="gapps"></div>
        </div>
      </div>

    )
  }
}

export default ImportMenu;