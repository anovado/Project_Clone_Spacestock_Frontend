import React from "react";
import { MDBContainer, MDBView, MDBMask } from "mdbreact";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Articles = () => {
  return (
    <MDBContainer className="mt-5">
      <div>
        <p className="subtitle-home text-left">Articles</p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode
          className=""
          containerclassName="container"
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
              items: 1.5,
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
          {/* <div className=""> */}
          <MDBView>
            <img
              src={require("../assets/images/article1.jpg")}
              className="carousel-articles"
              alt=""
            />
            <MDBMask
              className="flex-center"
              overlay="teal-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "auto",
                marginBottom: "0px",
                width: "415px",
                borderRadius: "0 0 16px 16px",
                height: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <p className="white-text font-weight-bold">
                Cek 9 Alat Elektronik ini di Hunian Kamu, Bikin Boros Listrik ,
                Lho!
              </p>
            </MDBMask>
          </MDBView>
          <MDBView>
            <img
              src={require("../assets/images/article2.jpg")}
              className="carousel-articles"
              alt=""
            />
            <MDBMask
              className="flex-center"
              overlay="teal-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "auto",
                marginBottom: "0px",
                width: "415px",
                borderRadius: "0 0 16px 16px",
                height: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <p className="white-text font-weight-bold">
                Prosedur dan Tata Cara Balik Nama Sertifikat Apartemen!
              </p>
            </MDBMask>
          </MDBView>
          <MDBView>
            <img
              src={require("../assets/images/article3.jpg")}
              className="carousel-articles"
              alt=""
            />
            <MDBMask
              className="flex-center"
              overlay="teal-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "auto",
                marginBottom: "0px",
                width: "415px",
                borderRadius: "0 0 16px 16px",
                height: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <p className="white-text font-weight-bold">
                Punya Barang Bekas di Rumah? Coba Ubah Jadi 15 Karya Unik ini
              </p>
            </MDBMask>
          </MDBView>
          <MDBView>
            <img
              src={require("../assets/images/article4.jpg")}
              className="carousel-articles"
              alt=""
            />
            <MDBMask
              className="flex-center"
              overlay="teal-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "auto",
                marginBottom: "0px",
                width: "415px",
                borderRadius: "0 0 16px 16px",
                height: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <p className="white-text font-weight-bold">
                12 Sewa Apartemen 2 Jutaan Per Bulan dengan Lokasi Terbaik
              </p>
            </MDBMask>
          </MDBView>
          <MDBView>
            <img
              src={require("../assets/images/article5.png")}
              className="carousel-articles"
              alt=""
            />
            <MDBMask
              className="flex-center"
              overlay="teal-light"
              style={{
                fontFamily: "Montserrat, sans-serif",
                position: "absolute",
                marginTop: "auto",
                marginBottom: "0px",
                width: "415px",
                borderRadius: "0 0 16px 16px",
                height: "40%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <p className="white-text font-weight-bold">
                Jangan Salah Pilih, ini dia Lokasi Apartemen Terbaik di Jakarta
              </p>
            </MDBMask>
          </MDBView>
        </Carousel>
      </div>
    </MDBContainer>
  );
};

export default Articles;
