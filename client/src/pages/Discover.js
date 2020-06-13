import React, { useState, Component } from "react";
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";
// import News from "./News";
import Moment from "moment";
import NewsCard from "../components/NewsStuff";
import API from "../utils/API";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
    this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
  }
  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    this.reverseGeocodeCoordinates();
  }
  reverseGeocodeCoordinates() {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&key=AIzaSyB80uGKY7XTuZUMoZlgQeUH6MHciBXkNWM`
    )
      .then(response => response.json())
      .then(data =>
        this.setState({
          userCity: data.results[5].address_components[1].long_name,
          userState: data.results[5].address_components[3].long_name
        })
      )
      .catch(error => alert(error));
  }
  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occured.");
        break;
      default:
        alert("An unknown error occured.");
    }
  }

  render() {
    // const officialCity = this.state.userCity;
    // console.log("officialcity", officialCity);
    const dateNews = Moment().format("MM/D/YYYY");

    return (
      <div className="App">
        <Hero backgroundImage="https://image.yayimages.com/1600/photo/abstract-newspaper-background-17527654.jpg">
          <h1 style={{ fontfamily: "Jazz LET, fantasy", fontsize: 60 }}>
            News
          </h1>

          <h5>
            Town: {this.state.userCity}, {this.state.userState}
          </h5>
          <h5>Date: {dateNews}</h5>
          <h5>Billboh's Tribune</h5>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Body city={this.state.userCity} />
        </Container>
      </div>
    );
  }
}

const Body = props => {
  // const SomeName = () => {
  // const [city, setCity] = useState("");
  // const [date, setDate] = useState("");
  // const city = props.city;
  const city = "san diego";
  const date = Moment().format("YYYYMMDD");
  const [news, setNews] = useState([]);

  // handleSearch();

  // API.scrape();

  const handleSearch = () => {
    API.getNews(city, date).then(({ data }) => {
      setNews(data.articles);
      console.log(data);
    });
  };

  handleSearch();
  // const newsDate = Moment().format("YYYYMMD");
  console.log("discover city", city);
  return (
    <div>
      <br></br>
      <h4 style={{ fontFamily: "Impact, fantasy" }}>
        <strong>
          Don't miss a beat and read up on today's news for {city}!
        </strong>
      </h4>
      <br></br>
      <br></br>
      <div className="row">
        {news.map(a => (
          <NewsCard props={a} />
        ))}
        {/* {news.map((a) => (
                    <NewsCard key={a.publishedAt} props={a} />
                    ))} */}
      </div>
      {/* <h1>{city}</h1>
      <h1>{date}</h1> */}
      {/* <h2></h2>
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">

          {/* <input
            placeholder="Where are you (city name?)"
            onChange={e => setCity(Discover.userCity)}
          />
          <input
            placeholder="What date do you want? (year-month-day)"
            onChange={e => setDate(newsDate)}
          />
          <button onClick={handleSearch} className="btn btn-warning btn-lg">
            Submit
          </button> */}

      {/* <div className="row">
            {news.map(a => (
              <NewsCard props={a} />
            ))}
            {/* {news.map((a) => (
                    <NewsCard key={a.publishedAt} props={a} />
                    ))} */}
      {/* </div>
        </div>
        <div className="col-2"></div> */}
      {/* // </div> */}
    </div>
  );
};

export default Discover;
