import React from "react";

import '../Header/header.css'

const Header = () => {
  return (
    <div className="header-background-color">
      <div className="ui vertical center aligned segment">
        <div className="ui container">
          <div id="navbar" className="ui fixed inverted menu">
            <div className="ui container">
              <a href="#" className="active header item">
                <i className="chart line icon large"></i>
              </a>
              <a href="#" className="active item">
                Home
              </a>
            </div>
          </div>

          <div className="ui text container header-text">
            <h1 className="ui header huge">
              <span id="mainText" className="cursive huge">
                WebInvest
              </span>
            </h1>
            <div className="ui horizontal divider inverted">
              <i className="percent icon"></i>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
