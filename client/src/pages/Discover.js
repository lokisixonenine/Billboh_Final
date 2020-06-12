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
          userAddress: data.results[0].formatted_address
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
        <h2>React Geolocation Test</h2>
        <button onClick={this.getLocation}>Get Coordinates</button>
        <h4>HTML5 Coordinates</h4>
        <p>Latitude: {this.state.latitude}</p>
        <p>Longitude: {this.state.longitude}</p>
        <h4>Google Maps Reverse Geocoding</h4>
        <p>Location : {this.state.userAddress}</p>
        {this.state.latitude && this.state.longitude ? (
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyB80uGKY7XTuZUMoZlgQeUH6MHciBXkNWM`}
            alt=""
          />
        ) : null}
      </div>
    );
  }
}
export default Discover;
