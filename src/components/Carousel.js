import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import assamblea from "../assamblea.png";
import churchMural from "../church-mural.png";
import church from "../church.png";
import grupo2 from "../grupo2.png";

export default function CarouselContainer() {
  return (
    <Carousel fade id="carousel">
      <Carousel.Item id="img-center">
        <img id="ind-img-carousel" src={assamblea} alt="First slide" />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item id="img-center">
        <img id="ind-img-carousel" src={churchMural} alt="Second slide" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item id="img-center">
        <img id="ind-img-carousel" src={grupo2} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item id="img-center">
        <img id="ind-img-carousel" src={church} alt="Third slide" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
