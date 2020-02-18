import React from "react";
// import logo from "./logo.svg";
import "./style/App.css";
import Map from "./components/Map";
import Information from "./components/Information";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        <h1>World Corona Stats</h1>
        {/* </a> */}
      </header>

      <Container>
        <Row>
          <Col sm={8}>
            <Map />
          </Col>
          <Col sm={4}>
            <Information />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
