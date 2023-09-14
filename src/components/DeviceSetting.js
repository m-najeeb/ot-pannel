import React from "react";
import "./DeviceSetting.css";
import { NavLink, Outlet } from "react-router-dom";

function DeviceSetting() {
  return (
    <header className="device-setting">
      <nav className="row">
        <ul className="col-md-1 device-setting-ulist">
          <li className="device-setting-list">
            <NavLink to="./sensor">Sensor</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./control">Controls</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./timeanddate">Time & Date</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./network">Network</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./isolationpt">Isolation PT</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./demo">Demo</NavLink>
          </li>
          <li className="device-setting-list">
            <NavLink to="./deviceinfo">Device Info</NavLink>
          </li>
        </ul>
        <div className="col-md-6 outlet-device-setting">
          <Outlet />
        </div>
      </nav>
    </header>
  );
}

export default DeviceSetting;
