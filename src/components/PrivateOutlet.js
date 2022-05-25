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
                // const r = await fetch("/api/verify");
                // if (r.status == 200) {
                //     const res = await r.json();
                //     userLogin(res.user);
                //     setCheckAuth(true);
                // }
                // else {
                //     userLogout();
                //     setCheckAuth(true);
                // }
                userLogin({
                    firstName:"Srikar",
                    lastName:"Rama",
                    email:"srikarrama@sreenidhi.edu.in",
                    role:"OWNER",
                    isEmailVerified:true,
                    isNumberVerified:true,
                    contact:{
                        number:"+916303061650",
                        country:"IN",
                        national:"6303061650",
                        international:"+916303061650",
                        uri:"tel:+916303061650",
                        numberType:"mobile",
                        possible:true,
                        valid:true
                    },
                    business_category:{
                        name:"FMCG",
                        value:100
                    },
                    business:{
                        slug:"bismillah-1",
                        business_id:"6239f557b36f2f137b909d15"
                    }

                });
                setCheckAuth(true);
            } catch (error) {
                console.log(error);
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