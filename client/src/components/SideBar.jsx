// import { ProSidebar, Menu, SidebarFooter,SidebarHeader,SidebarContent, MenuItem } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import DarkMode from "./DarkMode";
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import React from "react";

function SideBar(){

//     <div className="sidebar-sticky"></div>
  return (
    <div className="sidebar">

      <div id="sidebar_content" className="col-md-12">
        <div className="sidebar_header">
        </div>
        <div id="sidebar_bottom">

            <img src="/logo.svg"  alt="l"/>



          <DarkMode/>
          <IconButton>
            <GitHubIcon/>
          </IconButton>
        </div>
      </div>





    </div>
  );
}
export default SideBar;
