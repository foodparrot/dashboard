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
function Sidebar({ winHeight }) {
    const [collapseSidebar, setcollapseSidebar] = useState(false);
    const onCollapseHandler = () => {
        setcollapseSidebar(!collapseSidebar);
    }
    return (
            <ProSidebar collapsed={collapseSidebar} data-payload={collapseSidebar} id="fixedsidebar" style={{ height: `${winHeight}px`,overflow:"hidden" }}>
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
                            <MenuItem icon={<AiOutlineDashboard style={{ fontSize: "2em" }} />}>Dashboard <Link to='/dashboard' /></MenuItem>
                            <MenuItem icon={<RiSignalTowerFill style={{ fontSize: "2em" }} />}>Live Orders <Link to='/liveorders' /></MenuItem>
                            <MenuItem icon={<FaPauseCircle style={{ fontSize: "2em" }} />}>Pause Orders <Link to='/liveorders' /></MenuItem>
                            <MenuItem icon={<FaClipboardList style={{ fontSize: "2em" }} />}>Inventory <Link to='/liveorders' /></MenuItem>
                            <MenuItem icon={<RiHistoryLine style={{ fontSize: "2em" }} />}>Order History <Link to='/liveorders' /></MenuItem>
                            <MenuItem icon={<RiGroup2Fill style={{ fontSize: "2em" }} />}>Customers <Link to='/liveorders' /></MenuItem>
                            <SubMenu title="Menu" icon={<FaCubes style={{ fontSize: "2em" }} />}>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />}>Products<Link to="/dashboard" /> </MenuItem>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />}>Menus<Link to="/live" /></MenuItem>
                            </SubMenu>
                            <MenuItem icon={<FaStore style={{ fontSize: "2em" }} />}>Outlets <Link to='/liveorders' /></MenuItem>
                            <MenuItem icon={<HiSpeakerphone style={{ fontSize: "2em" }} />}>Marketing <Link to='/liveorders' /></MenuItem>
                        </Menu>
                    {/* </ProSidebar> */}
                </SidebarContent>
                <SidebarFooter>
                    <footer className="footer">
                        <Menu iconShape="circle" style={{paddingTop: "5px"}} >
                            <SubMenu title="Account" icon={<FaUserCircle style={{ fontSize: "2em" }} />}>
                                <MenuItem icon={<MdAccountCircle style={{ fontSize: "1.5em" }} />}>Profile<Link to="/dashboard" /> </MenuItem>
                                <MenuItem icon={<FaPowerOff style={{ fontSize: "1.5em", color: "#6aac2e" }} />}>Logout<Link to="/live" /></MenuItem>
                            </SubMenu>
                        </Menu>
                    </footer>
                </SidebarFooter>
            </ProSidebar>

    )
}
const mapSizesToProps = ({ height }) => ({
    winHeight: height
})
export default withSizes(mapSizesToProps)(Sidebar)
