"use client";
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faWheatAwn,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import "../../assets/CSS/FeaturesSection.css";

export default function FeaturesSection() {
  return (
    <div className="features-section">
      <h2>Important thing in farming</h2>
      <p>
        Start by planning for your farm progress by following the right steps
      </p>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <FontAwesomeIcon icon={faSackDollar} bounce />
                <Card.Title>Farming is a job, a way to earn money</Card.Title>
                <Card.Text>
                  This is not the decision you will find in the dictionary but in
                  practical.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FontAwesomeIcon icon={faWheatAwn} bounce />
                <Card.Title>Agriculture is everything involved</Card.Title>
                <Card.Text>
                  This is not the decision you will find in the dictionary but in
                  practical.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <FontAwesomeIcon icon={faSeedling} bounce />
                <Card.Title>Farming is a job, a way to earn money</Card.Title>
                <Card.Text>
                  Discover many ways that farmers do not hear of, farming as a
                  success.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
