import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Parent from "./Parent/Parent";

const PrivateLayout = ({ user, navLinks, ...props }) => {
  return (
    <div className="container-fluid m-0 p-0 d-flex">
      <Sidebar navLinks={navLinks} />
      <Parent>{props.children}</Parent>
    </div>
  );
};
export default PrivateLayout;