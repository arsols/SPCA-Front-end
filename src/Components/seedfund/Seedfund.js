import React from 'react'
import './style.css'

import SPCA from '../../Assets/SPCACoinicon.png'

import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

const Seedfund = () => {
  return (
    <Container style={{marginTop:'50px',marginBottom:'40px'}}>
        <div>
            <h4 style={{color:'#fbb03b'}}><b>GET UP TO 50% BONUS BY JOINING SEED ROUND BEFORE</b></h4>
            <h4 style={{color:'#fbb03b'}}><b>PANCAKESWAP LISTING</b></h4>
        </div>
        <Row>
            <Col xs={12} md={2}>
            <Card.Img style={{ width: "60%" , borderRadius:'10px',marginTop:'-14px'}} variant="top" src='https://static.miraheze.org/loathsomecharacterswiki/thumb/e/e1/Mr._Krabs_Oil_Painted.png/300px-Mr._Krabs_Oil_Painted.png' />
            </Col>
            <Col style={{marginTop:'30px'}} xs={12} md={8}>
                <h2 style={{color:'white'}}>24d 14h 10m 51s</h2>
                <p style={{color:'white'}}>Remaining Untill Presale</p>
            </Col>
            <Col xs={12} md={2}>
            <Card.Img style={{ width: "100%" , borderRadius:'10px'}} variant="top" src='https://static.wikia.nocookie.net/ed-edd-n-eddy-the-ultimate-edchronicles/images/a/a6/Files_1_SpongeBob_Download_Paper_Characters_Paper_Character_KRABS.png' />
            </Col>
        </Row>
        <ProgressBar variant="info" now={60} />
        <div>
            <p style={{color:'white'}}>56.567 BNB raised out of 654 BNB</p>
        </div>
        <Row style={{paddingTop:'20px',paddingBottom:'10px'}} className='bnbbox'>
            <Col xs={4} md={2}>
            <Card.Img style={{ width: "40%" , borderRadius:'10px',marginTop:'-14px'}} variant="top" src='https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png' />
            </Col>
            <Col  xs={12} md={8}>
            <Alert.Heading> <b style={{color:'white',width:'100%',marginTop:'-15px'}}>1BNB = 15,000 SPCA</b></Alert.Heading>
            </Col>
            <Col xs={4} md={2}>
            <Card.Img style={{ width: "40%" , borderRadius:'10px',marginTop:'-14px'}} variant="top" src={SPCA} />
            </Col>
        </Row>
        <Row style={{marginTop:'15px'}}>
            <Col xs={12} md={6}>
            <InputGroup className="mb-3">
                <Form.Control
                style={{backgroundColor:'#2d1b2b',border:'0px',color:'white'}}
                placeholder="Enter Ammount in BNB"
                aria-label="Enter Ammount in BNB"
                aria-describedby="basic-addon2"
                />
           </InputGroup>
            </Col>
            <Col xs={12} md={6}>
            <InputGroup className="mb-3">
                <Form.Control
                style={{backgroundColor:'#2d1b2b',border:'0px',color:'white'}}
                placeholder="Enter Ammount in BNB"
                aria-label="Enter Ammount in BNB"
                aria-describedby="basic-addon2"
                />
           </InputGroup>
            </Col>
        </Row>
        <Button className='connectWallet' variant="secondary">Connect Your Wallet</Button>{' '}
    
        <div style={{marginTop:'40px'}}>
            <p style={{color:'white'}}>Seed Round Ends 31st march or when hardcap is reached<br /> Presale on Pinksale starts 2nd April</p>
            <p style={{color:'white'}}> Listing on Pancakeswap Immediately After Presale</p>
        </div>
    </Container>
  )
}

export default Seedfund