import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import LoadingOverlay from 'react-loading-overlay-ts';
// import { useAppStore } from '../stores';
import "./applayout.css"
// const queryClient = new QueryClient()
// for suspense
const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     suspense: true,
  //   },
  // },
})
const AppLayout = (props) => {
  //   const loading = useAppStore(state => state.loading);
  //   const text = useAppStore(state => state.text);
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingOverlay spinner>
        <Outlet />
      </LoadingOverlay>
    </QueryClientProvider>
  );
};
export default AppLayout
//  open={!isEmailOrPhoneVerified()}
// email=>labl1
// otp input
// Email | phone veirifation label tilte
// 1-email
// 2-phone
// timer common
// API is comming
// otp is common (state)
// send or resend is common
// email:false email ask?
