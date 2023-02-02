import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import {NavLink} from 'react-router-dom';

export default function Sidebar(){
    return(
        <div style={{ display: 'flex', overflow: 'scroll initial'}}>
          <CDBSidebar textColor="#1B2E35" backgroundColor="#ffffff" className="shadow px-2" style={{position: 'fixed'}} >
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                  <img
                  alt=""
                  src="/logo512.png"
                  width="25"
                  height="25"
                  className="d-inline-block align-top"
                />{''}
                &ensp;
                React
              </a>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/dashboard" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/list" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="list">List</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/users" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user-alt">Users</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="sign-out-alt">Logout</CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
                © 2023
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>
      </div>
    );
}
