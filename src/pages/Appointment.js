import React from "react";

//Import layouts
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//Import components
import Footer from "../components/Footer";
import Header from "../components/Header";

function Appointment() {
  return (
    <div className="appointment-page container-fluid">
      <Row className="appointment-page_header">
        <Header />
      </Row>
      <Row className="appointment-page_content content">
        <form className="form d-flex flex-column justify-content-center align-items-center">
          <div className="form-name mb-5 d-flex flex-column ">
            <input type="text" placeholder="NAME" className="mb-4 input"></input>
            <input type="text" placeholder="FIRST NAME" className="mb-4 input"></input>
            <input type="email" placeholder="email" className="mb-4 input"></input>
            <input type="number" placeholder="phone" className="mb-4 input"></input>
          </div>
          <div className="form-button mb-5">
            <button className="btn-form btn btn-primary">Prendre rendez-vous</button>
          </div>
        </form>
        <p>Page pouvant être reliée à Calendly pour les rendez-vous (à voir) gratuit mais nécessite inscription avec adresse mail</p>
      </Row>
      <Row className="appointment-page_footer">
        <Footer />
      </Row>
    </div>
  );
}

export default Appointment;
