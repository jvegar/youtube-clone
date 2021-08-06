import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header__inputButton"/>
      </div>

      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="Jose Vega"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHGsW2rBPjYag/profile-displayphoto-shrink_800_800/0/1557176214668?e=1633564800&v=beta&t=c1zmi5jx4SIbeUdWSChZlsAlyhloB34KRW6SBHyH2nA"
        />
      </div>
    </div>
  );
}

export default Header;
