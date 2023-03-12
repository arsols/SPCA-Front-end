import React from "react";
import "./style.css";
import BANNER from "../../Assets/Landing page sections-1.png";
import Icons from "../../Assets/icons.png";
import VR from "../../Assets/Landing page sections-5.png";
import Future from "../../Assets/Landing page sections-6.png";
import Banar from "../../Assets/Landing page sections-7.png";
import Coin from "../../Assets/coinicon.png";
import Spica from "../../Assets/spica.png";
import Roadmap from "../../Assets/Landing page sections-4.png";
import Spicasuper from "../../Assets/supercoin.png";


import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const Home = () => {
  return (
    <div>
      <div>
        <img width="100%" src={BANNER} alt="..." />
        <img width="100%" src={Icons} />
      </div>
      <div>
        <h2 className="headindcolor">Sneak Peak</h2>
      </div>
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
      <Container style={{marginTop:'25px',marginBottom:'24px'}}>
      <Row style={{textAlign:'center'}}>
        <Col xs={12} md={6}>
        <Card style={{ backgroundColor: "black" }}>
            <Card.Body>
                <Card.Title className="title"><span className="color">Fully customizable</span></Card.Title>
                <Card.Text className="text">
                Choose your own avatar, style your hair, clothing, car and weapon as you wish - even buy planets! With Ezzstar's vast universe waiting for you to explore, there's always something new happening every day.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6}>
        <Card style={{ backgroundColor: "black" }}>
            <Card.Body>
                <Card.Title className="title"><span className="color">Multiplayer mode</span></Card.Title>
                <Card.Text className="text">
                EZZSTAR is the world's first multiplayer VR Cross platform game which lets users play together in the same space in real time. Experience intense battles with friends and show off your skills in this futuristic environment.
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      <Col xs={12} md={12}>
      <Card.Img style={{ width: "100%" , borderRadius:'10px'}} variant="top" src={Banar} />
      </Col>
      </Container>
      <Container>
        <Row>
            <Col xs={12} md={3}>
            <Card.Img style={{ width: "100%" ,height:'100%'  , borderRadius:'10px'}} variant="top" src={Spica} />
            </Col>
            <Col xs={12} md={6}>
            <Card.Text style={{marginTop:'35px'}} className="text">
            THE SPICA CRYPTOCURRENCY IS THE MAIN CURRENCY OF OUR WORLD. WITH IT, YOU CAN BUY WEAPONS, LANDS, AND OTHER ASSETS TO SHOW OFF YOUR WEALTH AND POWER.
            </Card.Text>
            <Button className="connectWallet" variant="secondary">Wallet</Button>{' '}
            </Col>
            <Col xs={12} md={3}>
            <Card.Img style={{ width: "100%",height:'100%' , borderRadius:'10px'}} variant="top" src={Coin} />
            </Col>
        </Row>
      </Container>
      <Container>
      <Row style={{textAlign:'center'}}>
        <Col xs={12} md={6}>
        <Card style={{ backgroundColor: "black" }}>
            <Card.Body>
                <Card.Title className="title"><span className="seecolor">Earn while you play</span></Card.Title>
                <Card.Text className="text">
                Earn SPICA while completing quests that are available to all players. You can invest your earnings to get more powerful weapons and vehicles!
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
        <Col xs={12} md={6}>
        <Card style={{ backgroundColor: "black" }}>
            <Card.Body>
                <Card.Title className="title"><span className="wordcolor">Invest your savings wisely</span></Card.Title>
                <Card.Text className="text">
                SPICA can be withdrawn anytime in the form of cash just invest wisely to get the best value for your money!
                </Card.Text>
            </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      <div>
        <h2 className="headindcolor">Roadmap</h2>
      </div>
      <div>
        <img width="100%" src={Roadmap} alt="..." />
      </div>
      <div>
        <h2 className="headindcolor">SPICA Contract</h2>
      </div>
  <Container style={{marginTop:'20px',marginBottom:'20px'}}>
    <Card.Title style={{textAlign:'left',fontSize:'25px'}} className="title">USE THE CONTRACT INFORMATION <br />BILLOW TO ADD <span style={{color:'rgb(0, 255, 242)'}}>SPICA </span> TO YOUR WALLET</Card.Title>
  </Container>
  <Container>
  <Row>
            <Col style={{textAlign:'left',marginTop:'30px'}} xs={12} md={8}>
            <Card.Title style={{fontSize:'25px'}} className="title">ADDRESS</Card.Title>
            <Card.Text style={{marginTop:'0px',fontSize:'25px',color:'rgb(255 0 106)',fontWeight:'bolder'}} className="text">
             sda12sdsadasdasd12w1
            </Card.Text>
            <Button style={{marginBottom:'10px',backgroundColor:'transparent',border:'0px'}} variant="secondary">Copy</Button>{' '}
            <Card.Title style={{fontSize:'25px'}} className="title">Decimal</Card.Title>
            <Card.Text style={{marginTop:'0px',fontSize:'25px',color:'rgb(0, 255, 242)',fontWeight:'bolder'}} className="text">
             18
            </Card.Text>
            <Button style={{marginBottom:'10px',backgroundColor:'transparent',border:'0px'}} variant="secondary">Copy</Button>{' '}
            <Card.Title style={{fontSize:'25px'}} className="title">Token Symbol</Card.Title>
            <Card.Text style={{marginTop:'0px',fontSize:'25px',color:'rgb(0, 255, 242)',fontWeight:'bolder'}} className="text">
             SPCA
            </Card.Text>
            <Button style={{backgroundColor:'transparent',border:'0px'}} variant="secondary">Copy</Button>{' '}
            </Col>
            <Col xs={12} md={4}>
            <Card.Img style={{ width: "100%",height:'100%' , borderRadius:'10px'}} variant="top" src={Spicasuper} />
            </Col>
        </Row>
  </Container>
    </div>
  );
};

export default Home;
