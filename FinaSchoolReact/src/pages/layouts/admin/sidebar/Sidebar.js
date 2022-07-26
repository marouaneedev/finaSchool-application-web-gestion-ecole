import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Sidebar() {
  return (
    <div className="sidebarr">
      <br/>
      <nav
        className="sb-sidenav accordion sb-sidenav-light"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <NavLink className="nav-link" to="dashboard">
              <div className="sb-nav-link-icon">
                <DashboardIcon className="iconn"/>
              </div>
              <span className="linkk">Dashboard</span>
            </NavLink>

            <NavLink className="nav-link" to="students">
              <div className="sb-nav-link-icon">
                <GroupsIcon className="iconn"/>
              </div>
              <span className="linkk">Étudiants </span>
            </NavLink>

            <NavLink className="nav-link" to="salaries">
              <div className="sb-nav-link-icon">
                <GroupIcon className="iconn"/>
              </div>
              <span className="linkk">Salariés </span>
            </NavLink>


            <NavLink className="nav-link" to="widget">
              <div className="sb-nav-link-icon">
                <AddCircleOutlineIcon  className="iconn"/>
              </div>
              <span className="linkk">Widget</span>
            </NavLink>

            <NavLink
              className="nav-link collapsed kkkk"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <MonetizationOnIcon  className="iconn"/>
              </div>
              <span className="linkk">Finance</span>
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </NavLink>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <NavLink className="nav-link" to="revenu">
                <span className="linkk">Revenu</span>
                </NavLink>
                <NavLink className="nav-link" to="depense">
                <span className="linkk">Dépense</span>
                </NavLink>
              </nav>
            </div>

            <NavLink className="nav-link" to="inscription">
              <div className="sb-nav-link-icon">
                <SendIcon className="iconn"/>
              </div>
              <span className="linkk">Pré Insciption</span>
            </NavLink>

            <NavLink className="nav-link jj" to="messages">
              <div className="sb-nav-link-icon">
                <MessageIcon className="iconn"/>
              </div>
              <span className="linkk">Messages</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
