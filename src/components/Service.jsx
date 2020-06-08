import React from "react";
import { MDBContainer } from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Services = () => {
  return (
    <MDBContainer className="mt-5">
      <div>
        <p className="subtitle-home text-left">Layanan SpaceStock</p>
        <p className="text-left" style={{ fontFamily: "Inter, sans-serif" }}>
          Kami berfokus untuk mengedepankan transaksi real estate yang
          transparan dan terpercaya, serta unggul dalam layanan:
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerclassName="container-with-dots"
          dotListclassName=""
          draggable
          focusOnSelect={false}
          infinite
          itemclassName=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
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
            <img src={require("../assets/images/layanan1.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/layanan2.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/layanan3.png")} alt="" />
          </div>
          <div>
            <img src={require("../assets/images/layanan4.png")} alt="" />
          </div>
        </Carousel>
      </div>
    </MDBContainer>
  );
};

export default Services;
