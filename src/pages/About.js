import React from "react";

//Import layout
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import pages
import Header from "../components/Header";
import Footer from "../components/Footer";

//Insert
import avatar from "../images/avatar.jpg";

function About() {
  return (
    <div className="about-page container-fluid p-0">
      <Row className="about-page_header">
        <Header />
      </Row>
      <Row className="about-page_content content align-content-center px-3">
        <Col className="about-page_content-avatar" md={4}>
          <img src={avatar} className="avatar"></img>
        </Col>
        <Col className="about-page_content-description" md={7}>
          <p className="about-description text-justify">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </Col>
      </Row>
      <Row className="about-page_footer">
        <Footer />
      </Row>
    </div>
  );
}

export default About;
