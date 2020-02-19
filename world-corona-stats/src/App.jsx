import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./style/App.css";
// import Map from "./components/Map";
import SimpleMap from "./components/SimpleMap";
import Information from "./components/Information";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  const [allInformation, setAllInformation] = useState([]);

  useEffect(async () => {
    const coronaData = await axios({
      method: "GET",
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "130e574162msh6cc16dbd234fc6ep18d4e3jsn9a2bc8ca2759"
      }
    });

    console.log(coronaData);
    setAllInformation(coronaData.data.countries_stat);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>World Corona Stats</h1>
      </header>

      <Container>
        <Row>
          <Col sm={8}>
            <h1>Map</h1>
            {/* <SimpleMap /> */}
          </Col>
          <Col sm={4}>
            {allInformation.map(inf => {
              return (
                <Information
                  key={inf.country_name}
                  country_name={inf.country_name}
                  rate={inf.rate}
                  cases={inf.cases}
                  population={inf.population}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
