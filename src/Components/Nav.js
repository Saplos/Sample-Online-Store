import React from "react";
import "./App.css";

const NavLink = ({ index, onClick, children }) => {
  return <a onClick={() => onClick(index)}>{children}</a>;
};

const Nav = ({ activeTab, onTabChange }) => (
  <nav className="App-nav">
    <ul>
      <li className={`App-nav-item ${activeTab === 0 && "selected"}`}>
        <NavLink index={0} onClick={onTabChange}>
          Items
        </NavLink>
      </li>
      <li className={`App-nav-item ${activeTab === 1 && "selected"}`}>
        <NavLink index={1} onClick={onTabChange}>
          Cart
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
