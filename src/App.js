import logo from "./logo.svg";
import "./App.css";
import Connection from "./pages/connection-details";
import GeneralDetails from "./pages/general-details";
import FullDetails from "./pages/full-details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div class="container">
        <header id="nav-wrapper">
          <nav id="nav">
            <div class="nav left">
              <span class="gradient skew">
                <h1 class="logo un-skew">
                  <a href="/">Discover UI</a>
                </h1>
              </span>
              <button id="menu" class="btn-nav">
                <span class="fas fa-bars"></span>
              </button>
            </div>
            <div class="nav right"></div>
          </nav>
        </header>
        <div class="row">
          <div class="col-md-2">
            <Sidebar>
              <Menu>
                <SubMenu label="IBM Automation">
                  <MenuItem component={<Link to="/" />}> BAW </MenuItem>
                  <MenuItem> ODM </MenuItem>
                  <MenuItem> RPA </MenuItem>
                </SubMenu>
                <MenuItem> 3rd Party Automation</MenuItem>
                <MenuItem> OpenAPI based Patterns  </MenuItem>
              </Menu>
            </Sidebar>
            
          </div>
          <div class="col-md-10">

            <Outlet />
            <Routes>
              <Route path="/" element={<Connection />} />
              <Route path="common-assets" element={<GeneralDetails />} />
              <Route path="operational-details" element={<FullDetails />} />
              <Route path="*" element={<Connection />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
