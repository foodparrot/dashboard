import React, { useState, useRef } from 'react'
import './Menus.css'
import BootstrapModal from '../Popups/BootstrapModal';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menus() {

  const [openD, setOpenD] = useState(false);
  const onCloseD = () => setOpenD(false);
  const popRef = useRef();

  const BodyDelete = () => (
    <div>
      <p>Are you sure you want to delete ?</p>
    </div>
  )

  const FooterDelete = () => (
    <div>
      <Button variant="danger" onClick={onCloseD}>Delete</Button>
    </div>
  )

  return (
    <div className="container-fluid ">
      <div className="container-fluid row rowps-1">
        <p>Bismillah</p>
      </div>
      <div className="container propal">
        {/*first line*/}
        <div className="flex-container container" style={{paddingTop:"3%"}}>
          <div className="flex-item item10"><p>Menu</p></div>
          <div>
            <Link to={"../menus/Importmenu"}><button type="button" class="grad">Import menu</button></Link>
            <Link to={"../menus/Createmenu"}><button type="button" class="grad">Create</button></Link>
          </div>
        </div>
        {/*table*/}
        <div className="table-responsive-md ">
          <table class="table table10 menutab">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Business</th>
                <th scope="col">Platform</th>
                <th scope="col">State</th>
                <th scope="col">Actions</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Special Menu</td>
                <td></td>
                <td>FoodParrot</td>
                <td className="live" >Live</td>
                <td className="buttons"><a href="../View/View"><button className="btn btn-primary btn-sm view">View</button></a><button className="btn btn-outline-danger btn-sm del"
                  onClick={() => {
                    setOpenD(o => !o);
                  }}>Delete</button></td>
                <BootstrapModal onHide={onCloseD} show={openD} footer={<FooterDelete />}>
                  <BodyDelete />
                </BootstrapModal>
              </tr>
              <tr>
                <td></td>
                <td>Menu</td>
                <td></td>
                <td>FoodParrot</td>
                <td className="offline">Offline &ensp; <button style={{ outline: "none", border: "1.5px solid #ff8000", borderRadius: "10%", padding: "3px" }}>Publish</button></td>
                <td className="buttons"><a href="../View/View"><button className="btn btn-primary btn-sm view">View</button></a><button className="btn btn-outline-danger btn-sm del"
                  onClick={() => {
                    setOpenD(o => !o);
                  }}>Delete</button></td>
                <BootstrapModal onHide={onCloseD} show={openD} footer={<FooterDelete />}>
                  <BodyDelete />
                </BootstrapModal>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );

}
export default Menus