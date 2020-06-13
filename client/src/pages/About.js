import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Discover from "./Discover";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.hobbitontours.com/media/1174/hobbiton-movie-set-30.jpg">
        <h1>Billboh's Travels</h1>
        <h2>A travel app for news and history lovers!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Billboh!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <br></br>
            <p>
              Our world is so compled and constantly changing! History is
              amazing, complex, intriguing, and can tell us so much about the
              current world we live in. But how often on a daily basis, do we
              miss out on the valuable information around us anywhere and
              everywhere we go? Well, NO LONGER! Billboh to the rescue!{" "}
            </p>

            <p>
              Billboh is an app that not only helps you find amazing cool
              historical facts and news, but it will deliver it to you without
              even the click of button! It will take your location and
              automatically search nearby for you and populate results, giving
              you a bunch of cool history on the city your visiting and also the
              latest news! Not only that, but Billboh gives you super fun random
              facts about events in history.{" "}
            </p>

            <p>
              History is in the making all around us, and Billboh is bringing it
              to your front door (aka your phone). Read up on your city’s
              history, check out the local news, and keep a tracker of fun facts
              all in one place! Have fun!
            </p>
            <br></br>
            <h2>
              <strong>Overview and History of San Diego</strong>
            </h2>
            <br></br>
            <p>
              San Diego (/ˌsæn diˈeɪɡoʊ/, Spanish: [san ˈdjeɣo]; Spanish for
              'Saint Didacus') is a city in the U.S. state of California on the
              coast of the Pacific Ocean, approximately 120 miles (190 km) south
              of Los Angeles and immediately adjacent to the border with Mexico.
              With an estimated population of 1,423,851 as of July 1, 2019,[10]
              San Diego is the eighth-largest city in the United States and
              second-largest in California. It is part of the San Diego–Tijuana
              conurbation, the second-largest transborder agglomeration between
              the U.S. and a bordering country after Detroit–Windsor, with a
              population of 4,922,723 people.[12] The city is known for its mild
              year-round climate, natural deep-water harbor, extensive beaches,
              long association with the United States Navy, and recent emergence
              as a healthcare and biotechnology development center.
            </p>

            <p>
              San Diego has been called "the birthplace of California".[13]
              Historically home to the Kumeyaay people, it was the first site
              visited by Europeans on what is now the West Coast of the United
              States. Upon landing in San Diego Bay in 1542, Juan Rodríguez
              Cabrillo claimed the area for Spain, forming the basis for the
              settlement of Alta California 200 years later. The Presidio and
              Mission San Diego de Alcalá, founded in 1769, formed the first
              European settlement in what is now California. In 1821, San Diego
              became part of the newly declared Mexican Empire, which reformed
              as the First Mexican Republic two years later. California became
              part of the United States in 1848 following the Mexican–American
              War and was admitted to the union as a state in 1850.
            </p>

            <p>
              The city is the seat of San Diego County and is the economic
              center of the region as well as the San Diego–Tijuana metropolitan
              area. San Diego's main economic engines are military and
              defense-related activities, tourism, international trade, and
              manufacturing. The presence of the University of California, San
              Diego (UCSD), with the affiliated UCSD Medical Center, has helped
              make the area a center of research in biotechnology.
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col>
          <h2>
            <strong>San Diego</strong>
          </h2>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default About;
