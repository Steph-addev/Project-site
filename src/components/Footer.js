import React from "react";

//Import layout
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div className="footer container m-auto">
      <Row>
        <Col>
          <div className="footer_social d-flex justify-content-evenly">
            <p>PRESS</p>
            <p>INSTAGRAM</p>
          </div>
        </Col>

        <Col>
          <p>@2022 ELODIE VANN</p>
        </Col>
        <Col>
          <p>TERM OF USE</p>
        </Col>
        <Col>
          <p>PRIVACY POLICY</p>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
