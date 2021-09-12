import React , {Component} from 'react';
import './ImportMenu.css';
import { FiSearch } from 'react-icons/fi';
import MenusCard from '../MenusCard/MenusCard';

export class ImportMenu extends Component {

    render(){
      const Checked = 'true';
        return(
            <div className="container-fluid ">
                    <div className='row header'>
                        <p>Bismillah Outlet</p>
                    </div>
              <div className="container">
                <div className="flex-container">
                    <div className="flex-item item1">
                      <b>Create Menu</b>
                    </div>
                </div>
              </div>
              <div className="main-content Import">
                 <div className="input-section">
                  <div className="row inputs">
                      <div className="col-sm-2">Name</div>
                      <div className="col-12 col-md-6">
                        <input className="name-input" type="text"/>
                      </div>
                  </div>
                  <div className="row inputs">
                      <div className="col-sm-2">Notes</div>
                      <div className="col-12 col-md-6">
                        <textarea className="notes-input"></textarea>
                      </div>
                  </div>
                  <div class="row inputs">
                      <div class="col-sm-2">
                        <label for="selectOutletToPause" style={{whiteSpace:"nowrap"}}>Select outlet</label>
                      </div>
                      <div className="col-12 col-md-6">
                        <select class="form-control" id="selectImport">
                            <option></option>
                            <option></option>
                        </select>
                      </div>
                  </div>
                  <div className="row inputs1">
                      <div className="col-12 col-md-8">
                        <FiSearch className="search2" /><input className="searchInp" type="search" placeholder="Search Categories"/>
                      </div>
                      <div className="col-12 col-md-2">
                        <input type="checkbox" id="select all" name="select_all" value="select_all"/>
                        <label className="select-label" for="select all">Select All</label>
                      </div>
                      <div className="col-12 col-md-2">
                          <label className="selected">1 Selected</label>
                      </div>
                  </div>
                  <div className="container">
                    <div className="row card-row" style={{ justifyContent: "space-around" }}>
                        <MenusCard />
                        <MenusCard checked={Checked}/>
                    </div>
                </div>
                  <div className="row btns">
                      <button type="button" class="grad">Cancel</button>
                      <button type="button" class="btn btn-success">Import</button>
                  </div>
                 </div>
              </div>
            </div>
        )
        }
}

export default ImportMenu;