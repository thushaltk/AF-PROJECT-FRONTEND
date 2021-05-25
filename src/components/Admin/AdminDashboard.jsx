import { TextField } from "@material-ui/core";
import React from "react";

import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand sb-topnav"
        style={{
          backgroundColor: "#3F51B5",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            height: "80px"
        }}
      >
        <div className="container-fluid">
          <button
            data-toggle="collapse"
            data-target="#layoutSidenav"
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <TextField
          className="d-none d-md-inline-block order-2 ml-auto mr-0 mr-md-3 my-2 my-md-0"
            id="filled-basic"
              type="text"
              label="Search"
              variant="outlined"
              color="white"
            />
          <ul className="sb-ul navbar-nav d-flex order-3 ml-auto ml-md-0">
            <li className="sb-li nav-item d-flex justify-content-center align-items-center">
              <div className="nav-item dropdown no-arrow">
                <a
                  className="dropdown-toggle active text-white"
                  aria-expanded="false"
                  data-toggle="dropdown"
                  href="#"
                >
                  &nbsp;
                  <img
                    className="rounded-circle"
                    src="assets/img/boy.jpg"
                    style={{
                      width: "40px",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right text-left shadow"
                  style={{ marginTop: "16px" }}
                >
                  <a className="dropdown-item" href="#">
                    Pengaturan
                  </a>
                  <a className="dropdown-item" href="#">
                    Log Aktivitas
                  </a>
                  <a className="dropdown-item" href="#">
                    Pelanggaran
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    Keluar
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <div
            id="sidenavAccordion"
            className="sb-sidenav accordion"
            style={{ backgroundColor: "#3F51B5" }}
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div>
                  <div className="sb-sidenav-menu-heading">
                    <span>Labeling</span>
                  </div>
                  <a className="nav-link active" href="#">
                    <div className="sb-nav-link-icon">
                      <i className="fa fa-dashboard" />
                    </div>
                    <span>Dashboard</span>
                  </a>
                </div>
                <div>
                  <div className="sb-sidenav-menu-heading">
                    <span>Labeling</span>
                  </div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapseLayouts"
                    aria-expanded="false"
                    aria-controls="collapseLayouts"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fa fa-dashboard" />
                    </div>
                    <span>Accordion</span>
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fa fa-angle-down" />
                    </div>
                  </a>
                  <div
                    id="collapseLayouts"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#sidenavAccordion"
                  >
                    <div className="sb-sidenav-menu-nested nav">
                      <a className="nav-link" href="#">
                        Menu Accordion
                      </a>
                      <a className="nav-link" href="#">
                        Menu Accordion
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sb-sidenav-menu-heading">
                    <span>Labeling</span>
                  </div>
                  <a
                    className="nav-link collapsed"
                    href="#"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    <div className="sb-nav-link-icon">
                      <i className="fa fa-dashboard" />
                    </div>
                    <span>Accordion 2 Layer</span>
                    <div className="sb-sidenav-collapse-arrow">
                      <i className="fa fa-angle-down" />
                    </div>
                  </a>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="heading2"
                    data-parent="#sidenavAccordion"
                  >
                    <div
                      id="sidenavAccordionPages"
                      className="sb-sidenav-menu-nested nav accordion"
                    >
                      <a
                        className="nav-link collapsed"
                        href="#"
                        data-toggle="collapse"
                        data-target="#pagesCollapseAuth"
                        aria-expanded="false"
                        aria-controls="pagesCollapseAuth"
                      >
                        <span>Menu Item</span>
                        <div className="sb-sidenav-collapse-arrow">
                          <i className="fa fa-angle-down" />
                        </div>
                      </a>
                      <div
                        id="pagesCollapseAuth"
                        className="collapse"
                        aria-labelledby="headingOne"
                        data-parent="#sidenavAccordionPages"
                      >
                        <div className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="#">
                            Menu Item
                          </a>
                          <a className="nav-link" href="#">
                            Menu Item
                          </a>
                          <a className="nav-link" href="#">
                            Menu Item
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">
                <span>Logged as : David Aprilio</span>
              </div>
            </div>
          </div>
        </div>
        <div id="layoutSidenav_content">
          <main />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
