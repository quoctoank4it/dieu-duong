import React, { useRef } from "react";
import "./style.css";

const Menu = ({ openSideBar, isOpenSideBar }) => {
  const menuRef = useRef(null);

  const toggleMenu = () => {
    openSideBar(!isOpenSideBar);
  };

  return (
    <div className="menu-container" ref={menuRef}>
      <div className="circle-button" onClick={toggleMenu}>
        {isOpenSideBar ? "✖" : "☰"}
      </div>
    </div>
  );
};

export default Menu;
