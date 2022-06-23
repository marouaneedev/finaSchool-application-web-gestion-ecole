import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebarr">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <Link className="nav-link" to="dashboard">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>

            <Link className="nav-link" to="studentsList">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Etudiants list
            </Link>

            <Link className="nav-link" to="salariesList">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Salariés list
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
                <i className="fas fa-book-open" />
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

            <Link className="nav-link" to="insciption">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Pré Insciption
            </Link>

            <Link className="nav-link" to="messages">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Messages
            </Link>

            <Link className="nav-link" to="formation">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Formation
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
