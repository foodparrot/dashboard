import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import shallow from 'zustand/shallow';
import PrivateLayout from './PrivateLayout';
import { useUserStore } from "../stores";
import Loading from "./AuthLoading"
const PrivateOutlet = () => {
    const user = useUserStore((state) => state.data, shallow);
    const auth = useUserStore((state) => state.auth);
    const userLogin = useUserStore((state) => state.login);
    const userLogout = useUserStore((state) => state.logout);
    const [checkAuth, setCheckAuth] = useState(false);
    useEffect(() => {
        (async () => {
            try {
                const r = await fetch("/api/verify");
                if (r.status == 200) {
                    const res = await r.json();
                    userLogin(res.user);
                    setCheckAuth(true);
                }
                else {
                    userLogout();
                    setCheckAuth(true);
                }
            } catch (error) {
                userLogout();
                setCheckAuth(true);
            }
        })();
    }, []);
    if (!checkAuth) {
        return <Loading />
    }
    if (checkAuth && !auth) {
        // return <Navigate to="/" />;
        window.location.assign("https://ofas.tech/login");
        return <></>
    }
    return (
        <>
            <PrivateLayout>
                <Outlet />
            </PrivateLayout>
        </>
    )
}

export default PrivateOutlet