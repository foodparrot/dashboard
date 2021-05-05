import React, { useState, useEffect } from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './pro-side-bar-styles.css';
import './Sidebar.css';
import { FaHeart, FaCubes, FaUserCircle, FaPowerOff, FaStore, FaGem, FaPauseCircle, FaClipboardList } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiSignalTowerFill, RiHistoryLine, RiGroup2Fill } from "react-icons/ri";
import { HiSpeakerphone } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import withSizes from 'react-sizes';
import Collapse from './Collapse';
import Navbarmobile from '../Navbarmobile/Navbarmobile';
function Sidebar({ winHeight,winWidth }) {
    const [collapseSidebar, setcollapseSidebar] = useState(false);
    const [mobileCollapseSidebar, setmobileCollapseSidebar] = useState(false);
    const onCollapseHandler = () => {
        setcollapseSidebar(!collapseSidebar);
    }
    const onMobileCollapseHandler = () => {
        // setcollapseSidebar(mobileCollapseSidebar);
        console.log(winWidth);
        if(winWidth<=850){
            setcollapseSidebar(false);
            setmobileCollapseSidebar(!mobileCollapseSidebar);
        }

    }
    useEffect(()=>{
        if(winWidth <= 850){
            if(mobileCollapseSidebar){
                window.$('#fixedsidebar').show();
            }
            else {
                setTimeout(()=>{
                    window.$('#fixedsidebar').hide();
                    // call again if window is rotated/resized due to async operation
                    setmobileCollapseSidebar(false);
                },350);
                // window.$('#fixedsidebar').fadeOut(350);
            }
        }
        else{
            window.$('#fixedsidebar').removeClass('in-left');
            window.$('#fixedsidebar').removeClass('out-left');
            setTimeout(()=>{window.$('#fixedsidebar').show()},500);

        }


    });
    return (
            <>
            <Navbarmobile mobileCollapseSidebar={mobileCollapseSidebar} onMobileCollapseHandler = {onMobileCollapseHandler} id="navbarmobile" style={{display:"none"}}/>
            <ProSidebar collapsed={collapseSidebar} value={mobileCollapseSidebar} data-payload={collapseSidebar} id="fixedsidebar" style={{ height: `${winHeight}px`,overflow:"hidden" }} className={mobileCollapseSidebar ? "in-left" : (winWidth > 850 ? "" :"out-left" )}>
                <SidebarHeader style={
                    {
                        // background: "url(/images/mainlogo.svg)   5px 5px no-repeat",
                        background: "url(/images/mainlogo.svg)   5px 10px no-repeat",
                        backgroundSize: "200px",
                        height: "50px",
                        // padding:"30px 10px 25px 10px",
                        padding: "30px",
                        // backgroundColor: "rgba(240, 168, 105,1)",
                        backgroundColor: "rgb(152 198 147 / 31%)",
                        width: "225px"
                    }}>
                </SidebarHeader>
                <Collapse collapseSidebar = {collapseSidebar} onCollapseHandler = {onCollapseHandler} />
                <SidebarContent style={{ overflow:"hidden" }} >
                    {/* <ProSidebar > */}
                        <Menu iconShape="circle" style={{ overflowY:"scroll",height:"100%" }}>
                            <MenuItem icon={<AiOutlineDashboard style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Dashboard <Link to='/dashboard' /></MenuItem>
                            <MenuItem icon={<RiSignalTowerFill style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Live Orders <Link to='/LiveOrders' /></MenuItem>
                            <MenuItem icon={<FaPauseCircle style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Pause Orders <Link to='/PauseOrders' /></MenuItem>
                            <MenuItem icon={<FaClipboardList style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Inventory <Link to='/Inventory' /></MenuItem>
                            <MenuItem icon={<RiHistoryLine style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Order History <Link to='/OrderHistory' /></MenuItem>
                            <MenuItem icon={<RiGroup2Fill style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Customers <Link to='/Customers' /></MenuItem>
                            <SubMenu title="Menu" icon={<FaCubes style={{ fontSize: "2em" }} />}>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />} onClick={onMobileCollapseHandler}>Products<Link to="/Products/Products" /> </MenuItem>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />} onClick={onMobileCollapseHandler}>Menus<Link to="/menu/menus" /></MenuItem>
                            </SubMenu>
                            <MenuItem icon={<FaStore style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Outlets <Link to='/outlets' /></MenuItem>
                            <MenuItem icon={<HiSpeakerphone style={{ fontSize: "2em" }} />} onClick={onMobileCollapseHandler}>Marketing  <Link to='#' /></MenuItem>
                        </Menu>
                    {/* </ProSidebar> */}
                </SidebarContent>
                <SidebarFooter>
                    <footer className="footer">
                        <Menu iconShape="circle" style={{paddingTop: "5px"}} >
                            <SubMenu title="Account" icon={<FaUserCircle style={{ fontSize: "2em" }} />}>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />} onClick={onMobileCollapseHandler}>Profile<Link to="#" /> </MenuItem>
                                <MenuItem icon={<FaPowerOff style={{ fontSize: "1.5em", color: "#6aac2e" }} />} onClick={onMobileCollapseHandler}>Logout<Link to="#" /></MenuItem>
                            </SubMenu>
                        </Menu>
                    </footer>
                </SidebarFooter>
            </ProSidebar>
</>
    )
}
const mapSizesToProps = ({ height, width }) => ({
    winHeight: height,
    winWidth: width
})
export default withSizes(mapSizesToProps)(Sidebar)
