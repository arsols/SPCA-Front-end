import React from 'react'

import Roadmap from "../../Assets/Landing page sections-4.png";
import Future from "../../Assets/Landing page sections-6.png";
import Banner from "../../Assets/Landing page sections-7.png";
import VR from "../../Assets/Landing page sections-5.png";
import ten from "../../Assets/Landing page sections-10.png";
import eleven from "../../Assets/Landing page sections-11.png";
import six from "../../Assets/Landing page sections-16.png";
import seven from "../../Assets/Landing page sections-17.png";

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Game = () => {
  return (
   <Container>
    <Row>
      <Col style={{color:'white',textAlign:'left'}} xs={12} md={4} >
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Col>
      <Col xs={12} md={8} >
        <Row>
    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={seven} />
        </Card>
    </Col>
    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={Future} />
        </Card>
    </Col>
    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={Banner} />
        </Card>
    </Col>
    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={eleven} />
        </Card>
    </Col>

    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={six} />
        </Card>
    </Col>

    <Col xs={6} md={4} style={{marginTop:'14px'}}>
        <Card style={{ width: '100%',backgroundColor:'black',height:'10rem'}}>
          <Card.Img style={{height:'100%',borderRadius:'15px'}} variant="top" src={ten} />
        </Card>
    </Col>

 
    
        </Row>
      </Col>
    </Row>
   </Container>
  )
}

export default Game