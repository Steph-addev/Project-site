//Necessary to run the app
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//Import layout
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import Style
import { FaBars } from "react-icons/fa";
import logo6 from "../images/Logo6.svg";
import logo8 from "../images/Logo8.svg";

function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 426px)" });

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header container-fluid">
      <Row>
        {isTabletOrDesktop && (
          <Fragment>
            <Col md={3}>
              <Col>
                <Link to="/appointment">MAKE AN APPOINTMENT</Link>
              </Col>
              <Col>
                <Link to="/contact">CONTACT</Link>
              </Col>
              <Col>
                <Link to="/collections">COLLECTIONS</Link>
              </Col>
              <Col>
                <Link to="/about">ABOUT</Link>
              </Col>
            </Col>
            <Col md={7}>
              <Link to="/home">
                <img src={logo6} className="logoDesktop"></img>
                <p className="engaging">ENGAGING IN ELEGANCE</p>
              </Link>
            </Col>
          </Fragment>
        )}

        {isMobile && (
          <Col>
            <Col sm={1}>
              <button onClick={() => setShowMenu(!showMenu)} className="button-noStyle">
                <FaBars />
              </button>
            </Col>
            {showMenu && (
              <div className="menu-mobile d-flex flex-column">
                <Link to="/appointment">Make an appointment</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/collections">Collections</Link>
                <Link to="/about">About</Link>
              </div>
            )}
            <Col sm={7}>
              <Link to="/home">
                <img src={logo8}></img>
              </Link>
            </Col>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default Header;
