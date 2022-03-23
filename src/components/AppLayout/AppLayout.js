import React from "react";
import { Outlet } from "react-router-dom";
import LoadingOverlay from 'react-loading-overlay-ts';
// import { useAppStore } from '../stores';
import "./applayout.css"
const AppLayout = (props) => {
//   const loading = useAppStore(state => state.loading);
//   const text = useAppStore(state => state.text);
  return (
    <LoadingOverlay spinner>
      <Outlet />
    </LoadingOverlay>
  );
};
export default AppLayout