import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div style={{ width: "100%", height: "80px", backgroundColor: "#0b483f" }}>
      <div className="d-flex justify-content-around  align-items-center mx-5">
        <h3>
          <NavLink to="/" activeClassName="navLinkActive">
            1
          </NavLink>
        </h3>
        <h3>
          <NavLink to="Block2" activeClassName="navLinkActive">
            2
          </NavLink>
        </h3>
        <h3>
          <NavLink to="Block3" activeClassName="navLinkActive">
            3
          </NavLink>
        </h3>
      </div>
    </div>
  );
};

export default Header;
