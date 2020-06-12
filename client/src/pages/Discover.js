import React, { Component } from "react";
// import API from "../utils/API";
// import Card from "../components/Card";
// import Alert from "../components/Alert";

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
          userCity: data.results[5].address_components[0].long_name,
          userState: data.results[5].address_components[2].long_name
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
    return (
      <div className="App">
        <h2>Billboh</h2>

        <h4>
          You're currently in: {this.state.userCity}, {this.state.userState}{" "}
        </h4>
      </div>
    );
  }
}
export default Discover;
