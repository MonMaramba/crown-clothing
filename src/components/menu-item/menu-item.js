import React from "react";
import { withRouter } from "react-router-dom"; // rather than prop tunneling(or drilling), withRouter is a higher order component that returns a modified component that will have access to router props

import "./menu-item.scss";
import { link } from "fs";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: ` url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem); // pass component into withRouter to return supercharged component with access to location, match, history.
