import React from "react";

//Import layouts
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//Import components
import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <div className="contact-page container-fluid p-0">
      <Row className="contact-page_header">
        <Header />
      </Row>
      <Row className="contact-page_content content m-5">
        <Container className="contact-page_content-form align-self-center">
          <Row className="contact-page_content-form_title mb-5">
            <Row className="text-center">
              <Col md={10}>
                <p className="form-elodie">ELODIE VANN</p>
              </Col>
              <Col md={2}>
                <p>VOL N°1</p>
              </Col>
            </Row>
            <Row className="text-center">
              <p>Membership</p>
            </Row>
          </Row>
          <Row className="contact-page_content-form_answers mb-5">
            <form className="form-contact">
              <Row className="form-name mb-5 ">
                <input type="text" placeholder="NAME" className="mb-4"></input>
                <input type="text" placeholder="FIRST NAME"></input>
              </Row>
              <Row className="form-choice text-center mb-5 mx-4">
                <Col className="form-choice_margin">
                  <button className="button-choice" type="button">
                    NEWS
                  </button>
                </Col>
                <Col className="form-choice_margin">
                  <button className="button-choice" type="button">
                    EVENT
                  </button>
                </Col>
                <Col>
                  <button className="button-choice " type="button">
                    COLLECTION
                  </button>
                </Col>
                <Col>
                  <button className="button-choice" type="button">
                    MORE
                  </button>
                </Col>
              </Row>
              <Row className="form-email mb-5">
                <input type="email" placeholder="email" className="mb-4"></input>
                <input type="number" placeholder="phone"></input>
              </Row>
              <Row className="form-button mb-5 justify-content-center">
                <button className="btn-form btn btn-primary" type="submit">
                  Sign up
                </button>
              </Row>
            </form>
          </Row>
        </Container>
      </Row>
      <Row className="contact-page_footer">
        <Footer />
      </Row>
    </div>
  );
}

export default Contact;
