import React from "react";
import { Link } from "react-router-dom";

//Import layouts
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Import components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Video from "../components/Video";
import CarouseL from "../components/Carousel";
import LogoAbout from "../components/LogoAbout";
import CollectionList from "../components/CollectionList";

function Home() {
  const urlHome = window.location.search;
  const isHome = new URLSearchParams(urlHome);
  const recupHome = isHome.get("home");

  console.log(urlHome);

  return (
    <div className="home-page container-fluid">
      <Row className="home-page_join">
        {isHome.has("/home") === "true" ? (
          <Row className="home-page_header">
            <Header className="text-white" />
          </Row>
        ) : (
          <Row className="home-page_header">
            <Header className="text-black" />
          </Row>
        )}

        <Row className="home-page_season align-content-start text-center">
          <p className="text-white">JOIN THE PARTY</p>
          <button className="text-white button-noStyle button-summer m-auto">SHOP SUMMER 2022</button>
        </Row>
      </Row>

      <Row className="home-page_content justify-content-center m-0">
        <Row className="home-page_content-video my-4">
          <Video />
        </Row>
        <Row className="home-page_content-rdv my-5 text-center">
          <Link to="/appointment">Prendre RDV</Link>
        </Row>
        <Row className="home-page_content-carousel my-4 text-center">
          <Col md={6}>
            <CarouseL />
          </Col>
          <Col md={6} className="align-self-center">
            <LogoAbout />
          </Col>
        </Row>
        <Row className="home-page_content-collections my-4 text-center">
          <CollectionList />
        </Row>
      </Row>
      <Row className="home-page_footer">
        <Footer />
      </Row>
    </div>
  );
}

export default Home;
