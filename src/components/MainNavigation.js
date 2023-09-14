import React from "react";
import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import { FiSettings } from "react-icons/fi";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import Vector from "../assets/Vector.png";

function MainNavigation() {
  return (
    <header className="main-navigation">
      <nav className="row">
        <ul className="col-md-1">
          <li>
            <img src={Vector} alt="img" />
          </li>
          <li>
            <NavLink to="/configuration">
              <span className="setting-icon">
                <FiSettings />
              </span>
              Configuration
            </NavLink>
          </li>
          <li>
            <NavLink to="/devicesetting">
              <span className="setting-icon">
                <FiSettings />
              </span>
              Device Setting
            </NavLink>
          </li>
          <li>
            <NavLink to="/Updates">
              <span className="setting-icon">
                <MdOutlineBrowserUpdated />
              </span>
              Updates
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
