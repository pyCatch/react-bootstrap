import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";

import {Slider} from "../components/Slider";
import laptop_3 from "../images/images_mac.jpeg";
import Jumbotron from "../components/Jumbotron";



export const Home = () => (
    <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={laptop_3}/>
                        <Card.Body>
                            <Card.Title>WEB dev blog</Card.Title>
                            <Card.Text>
                                Some lorien text
                            </Card.Text>
                            <Button variant={"primary"}>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={laptop_3}/>
                        <Card.Body>
                            <Card.Title>WEB dev blog</Card.Title>
                            <Card.Text>
                                Some lorien text
                            </Card.Text>
                            <Button variant={"primary"}>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem'}}>
                        <Card.Img variant={"top"} src={laptop_3}/>
                        <Card.Body>
                            <Card.Title>WEB dev blog</Card.Title>
                            <Card.Text>
                                Some lorien text
                            </Card.Text>
                            <Button variant={"primary"}>Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px', marginTop: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={laptop_3} height={400}/>
                </Col>
                <Col md={5}>
                    <h2>Web Developer Blog</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </Col>
            </Row>
        </Container>
    </>

)