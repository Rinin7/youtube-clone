import React, { useState } from "react";
import "./Header.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__logo-container">
        <MenuIcon />
        <Link to="/">
          <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="YouTube Logo" />
        </Link>
      </div>
      <div className="header__search-container">
        <input className="header__search" type="text" placeholder="Search" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header__search-button" />
        </Link>
      </div>
      <div className="header__icons-container">
        <VideoCallSharpIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar className="header__avatar" alt="Ryan headshot" src="https://avatars.githubusercontent.com/u/73149597?s=400&u=0dae2982491ac1fb466c4e09fd3dc2310f074a0d&v=4" />
      </div>
    </div>
  );
}

export default Header;
