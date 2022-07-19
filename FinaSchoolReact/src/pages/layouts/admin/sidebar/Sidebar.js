import React from "react";
import { Link } from "react-router-dom";
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
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <Link className="nav-link" to="dashboard">
              <div className="sb-nav-link-icon">
                <DashboardIcon/>
              </div>
              Dashboard
            </Link>

            <Link className="nav-link" to="students">
              <div className="sb-nav-link-icon">
                <GroupsIcon/>
              </div>
              Étudiants 
            </Link>

            <Link className="nav-link" to="salaries">
              <div className="sb-nav-link-icon">
                <GroupIcon/>
              </div>
              Salariés 
            </Link>


            <Link className="nav-link" to="widget">
              <div className="sb-nav-link-icon">
                <AddCircleOutlineIcon />
              </div>
              Widget
            </Link>

            <Link
              className="nav-link collapsed"
              to="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapsePages"
              aria-expanded="false"
              aria-controls="collapsePages"
            >
              <div className="sb-nav-link-icon">
                <MonetizationOnIcon />
              </div>
              Finance
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </Link>
            <div
              className="collapse"
              id="collapsePages"
              aria-labelledby="headingTwo"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="revenu">
                  Revenu
                </Link>
                <Link className="nav-link" to="depense">
                  Dépense
                </Link>
              </nav>
            </div>

            <Link className="nav-link" to="inscription">
              <div className="sb-nav-link-icon">
                <SendIcon />
              </div>
              Pré Insciption
            </Link>

            <Link className="nav-link" to="messages">
              <div className="sb-nav-link-icon">
                <MessageIcon/>
              </div>
              Messages
            </Link>



            {/* <div className="sb-sidenav-menu-heading">Addons</div>
            <Link className="nav-link" to="charts.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-area" />
              </div>
              Charts
            </Link>
            <Link className="nav-link" to="tables.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-table" />
              </div>
              Tables
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
