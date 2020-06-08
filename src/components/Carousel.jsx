import React from "react";
import { MDBContainer } from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousels = () => {
  return (
    <MDBContainer>
      <div>
        {/* <MDBRow> */}
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerclassName="container"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1.1,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderclassName=""
          slidesToSlide={1}
          swipeable
        >
          <div className="px-1">
            <img
              src={require("../assets/images/carousel1.jpg")}
              className="carousel-items"
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../assets/images/carousel2.jpg")}
              className="carousel-items"
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../assets/images/carousel3.jpg")}
              className="carousel-items"
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../assets/images/carousel4.jpg")}
              className="carousel-items"
              alt=""
            />
          </div>
          <div>
            <img
              src={require("../assets/images/carousel5.jpg")}
              className="carousel-items"
              alt=""
            />
          </div>
        </Carousel>
        {/* </MDBRow> */}
      </div>
    </MDBContainer>
  );
};

export default Carousels;
