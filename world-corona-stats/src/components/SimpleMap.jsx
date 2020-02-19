import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import countriesNames from "../App";
// require("dotenv").config();

console.log("countriesNames :", countriesNames);
const testCountries = ["Serbia", "England"];

const geoAPI = axios({
  method: "GET",
  url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
    "x-rapidapi-key": "cb237941ffmshda067129004025ap1a2d3djsnec6aa5810326"
  },
  params: {
    language: "en",
    address: "England"
  }
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

// We need to convert the counties to lat and lon with the geocode api

// We need to generate an array of these values
// We need to add a marker for each lat long pair

const AnyReactComponent = ({ text }) => <div>{text}</div>;
console.log("dotenv :", process.env.REACT_APP_API_KEY);
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={24.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
