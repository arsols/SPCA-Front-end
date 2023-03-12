import React from 'react'


import VR from "../../Assets/Landing page sections-5.png";
import Future from "../../Assets/Landing page sections-6.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Nft = () => {
  return (
    <Container style={{textAlign:'left'}}>
    <Row>
      <Col xs={12} md={5}>
        <Card.Img style={{ width: "100%" }} variant="top" src={VR} />
      </Col>
      <Col>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Body>
            <Card.Title className="title">BE YOURSELF IN <span style={{ color:'rgb(247, 0, 255)'}}>VR</span></Card.Title>
            <Card.Text className="text">
            EZZSTAR offers the most immersive virtual reality experience of its kind (both for gaming and for socializing), giving you a chance to become your own mini-celebrity in the game, or just have a blast exploring new worlds!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
    <Col>
        <Card style={{ backgroundColor: "black" }}>
          <Card.Body>
          <Card.Text className="text">
          EZZSTAR brings the fun of video games into a 3D virtual space that you can control with your hands. The game plays like an interactive movie, where users are immersed in an animated environment using virtual reality headsets.
            </Card.Text>
            <Card.Title className="title"><span style={{ color:'rgb(247, 0, 255)'}}>THE FUTURE OF GAMING</span></Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={7} >
        <Card.Img style={{ width: "100%" }} variant="top" src={Future} />
      </Col>
    </Row>
  </Container>
  )
}

export default Nft