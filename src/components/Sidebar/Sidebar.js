import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaGem } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Sidebar() {
    const ht = window.innerHeight+" !important";
    console.log(ht);
    return (
        <ProSidebar>
            <SidebarHeader>
                <h2>FoodParrot</h2>
                <span><img src="" /></span>
            </SidebarHeader>
            <SidebarContent>
                <ProSidebar>
                    <Menu iconShape="square">
                        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<FaHeart />}>
                            <MenuItem><a href="/dashboard"> Dashboard</a></MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </ProSidebar>
            </SidebarContent>
            <SidebarFooter>
            Footer
            </SidebarFooter>
        </ProSidebar>
    )
}

export default Sidebar
