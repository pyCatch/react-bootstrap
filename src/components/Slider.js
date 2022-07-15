import React from "react";
import {Carousel} from "react-bootstrap";

import laptop_1 from "../images/csit-sa-hero-1200x400.jpeg"
import laptop_2 from "../images/computer-laptop-macbook-coding.jpeg"
import laptop_3 from "../images/images_mac.jpeg"


export function Slider() {
    return(
        <Carousel>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className={"d-block w-100"}
                    src={laptop_1}
                    alt={"first slide"}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className={"d-block w-100"}
                    src={laptop_2}
                    alt={"first slide"}
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '600px'}}>
                <img
                    className={"d-block w-100"}
                    src={laptop_3}
                    alt={"first slide"}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}