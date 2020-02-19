import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

export default function Information(props) {
  // const { countryName, rate, cases, population } = props;
  const { country_name, rate, cases, population } = props;
  return (
    <ListGroup>
      <ListGroup.Item>
        {props.country_name} and {props.cases}
      </ListGroup.Item>
    </ListGroup>
  );
}
