import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.hobbitontours.com/media/1174/hobbiton-movie-set-30.jpg">
        <h1>Billboh's Travels</h1>
        <h2>A travel history app for history lovers!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Billboh!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet diam tortor, id consequat mauris ullamcorper eu. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Pellentesque et dui id justo finibus sollicitudin
              at et metus. Ut feugiat tellus nec metus commodo, sed suscipit
              nisi gravida.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
