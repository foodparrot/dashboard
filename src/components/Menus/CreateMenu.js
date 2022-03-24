import React , {Component} from 'react';
import './CreateMenu.css';

export class CreateMenu extends Component {
    render(){
        return(
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
              
              <div className="d-flex justify-content-center">
                <button type="button" class="grad mr-1 ml-0">Cancel</button>
                <button type="button" class="ml-1 btn btn-success">Save</button>
              </div>
            </div>
            <div className="gapps"></div>
          </div>
        </div>
  
        )
    }
}

export default CreateMenu;