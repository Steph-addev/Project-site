import React from "react";
import { useMediaQuery } from "react-responsive";

//Import layouts
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import components
import Footer from "../components/Footer";
import Header from "../components/Header";

//Insert
import collect from "../images/images.jpg";
import { Link } from "react-router-dom";

function Collections() {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTabletOrDesktop = useMediaQuery({ query: "(min-width: 426px)" });

  return (
    <div className="collections-page container-fluid p-0">
      <Row className="collections-page_header">
        <Header />
      </Row>
      <Row className="collections-page_content content justify-content-center">
        {isMobile && (
          <Row>
            <Row id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={collect} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                  <img src={collect} className="d-block w-100" alt="..."></img>
                </div>
                <div className="carousel-item">
                  <img src={collect} className="d-block w-100" alt="..."></img>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </Row>
            <Row className="p-4">
              <h1>Nom de l'article</h1>
              <p className="text-justify">Lorem ipsum dolor sit amet consectetuer adipiscing elit. Sem a pretium nisi commodo lacus augue nisl est lorem mollis aliquam class rhoncus. Nisi nunc luctus scelerisque. Cras. Velit cubilia magna fermentum nec suspendisse lacus neque non. Et magnis at mattis ultrices. Consequat pretium venenatis nulla enim vivamus lacinia eni pulvinar nisi conubia. Mus lectus. Tincidunt pretium sapien tempus vel. Ullamcorper vestibulum ut lorem nascetur metus curabitur praesent ve. Class eu tristique ipsum ut rutrum eleifend.</p>
            </Row>
          </Row>
        )}
        {isTabletOrDesktop && (
          <Row className="collections-page_content-article">
            <Col md={4}>
              <img src={collect} className="collections-page_content-article_image"></img>
            </Col>
            <Col md={4}>
              <img src={collect} className="collections-page_content-article_image"></img>
            </Col>
            <Col md={4}>
              <h1>Nom de l'article</h1>
              <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Sem a pretium nisi commodo lacus augue nisl est lorem mollis aliquam class rhoncus. Nisi nunc luctus scelerisque. Cras. Velit cubilia magna fermentum nec suspendisse lacus neque non. Et magnis at mattis ultrices. Consequat pretium venenatis nulla enim vivamus lacinia eni pulvinar nisi conubia. Mus lectus. Tincidunt pretium sapien tempus vel. Ullamcorper vestibulum ut lorem nascetur metus curabitur praesent ve. Class eu tristique ipsum ut rutrum eleifend.</p>
            </Col>
          </Row>
        )}

        <Row className="collections-page_content-rdv text-center my-5">
          <Link to="/appointment">Prendre RDV</Link>
        </Row>
        <Row className="collections-page_content-recommanded">
          <Col md={4}>
            <img src={collect} className="collections-page_content-article_image"></img>
          </Col>
          <Col md={4}>
            <img src={collect} className="collections-page_content-article_image"></img>
          </Col>
          <Col md={4}>
            <img src={collect} className="collections-page_content-article_image"></img>
          </Col>
        </Row>
      </Row>
      <Row className="collections-page_footer">
        <Footer />
      </Row>
    </div>
  );
}

export default Collections;
