import React from "react";

//Import layouts
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import collect from "../images/images.jpg";

function CollectionList() {
  return (
    <div className="container">
      <Row>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>

        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
        <Col md={4}>
          <img src={collect} className="collections_image"></img>
        </Col>
      </Row>
    </div>
  );
}

export default CollectionList;
