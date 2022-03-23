import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import PrivateLayout from './PrivateLayout';
const PrivateOutlet = () => {
    return (
        <>
            <PrivateLayout>
                <Outlet />
            </PrivateLayout>
        </>
    )
}

export default PrivateOutlet