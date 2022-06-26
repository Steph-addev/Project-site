import React from "react";
import { Link } from "react-router-dom";

import logo10 from "../images/Logo10.jpg";

function LogoAbout() {
  return (
    <div>
      <Link to="/about">
        <img src={logo10} className="logoAbout"></img>
      </Link>
    </div>
  );
}

export default LogoAbout;
