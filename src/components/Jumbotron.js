import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";

import laptop_1 from "../images/csit-sa-hero-1200x400.jpeg";


const Styles = styled.div`
    .jumbo {
        background: url(${laptop_1}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export function Jumbotron() {
    return(
        <Styles>
            <div className="bg-light p-5 rounded-lg jumbo">
                <div className={"overlay"}></div>
                <Container>
                    <h1>Web Developer Blog</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                        of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                        and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </p>
                </Container>
            </div>
        </Styles>
    )
}

export default Jumbotron;
