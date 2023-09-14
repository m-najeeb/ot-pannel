import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Control.css";

function Control() {
  return (
    <>
      <div className="control">
        <nav className="control-nav">
          <ul className="control-ulist">
            <li className="control-list cell-first">
              <NavLink to="./maindisplay">Main Display</NavLink>
            </li>
            <li className="control-list">
              <NavLink to="./hvac">HVAC</NavLink>
            </li>
            <li className="control-list">
              <NavLink to="./light">Light</NavLink>
            </li>
            <li className="control-list cell-last">
              <NavLink to="./display">Display</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Control;
