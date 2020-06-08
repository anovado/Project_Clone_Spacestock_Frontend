import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutBuilding = (props) => {
  const { building, address, about, building_image } = props;
  return (
    <MDBContainer className="mt-5">
      <MDBRow className="container-about-building">
        <MDBCol md="4" className="px-0">
          <div
            className="picture-about-building"
            style={{
              background: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${building_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              // marginTop: "-50%",
            }}
          >
            <div className="text-inside-picture-building">
              <p className="subtitle-home text-left text-white ml-2">
                {building}
              </p>
              <p className="text-white text-left ml-2 address-inside-picture">
                {address}
              </p>
              <p id="jumlah-unit-tersedia">
                {Math.floor(Math.random() * 100)} Unit Tersedia
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="8">
          <p className="subtitle-home text-left mt-4">Mengenai Kompleks</p>
          <p className="text-left mr-5">{about}</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutBuilding;
