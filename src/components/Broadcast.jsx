import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";

const Broadcast = () => {
  return (
    <MDBContainer style={{ marginTop: "20px", marginBottom: "50px" }}>
      <MDBRow className="subtitle-home mt-5 mb-3" style={{ fontWeight: "300" }}>
        Diliput Oleh
      </MDBRow>
      <MDBRow className="d-flex justify-content-between mb-5">
        <img
          src={require("../assets/images/bisnis.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
        <img
          src={require("../assets/images/berita-satu.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
        <img
          src={require("../assets/images/kompas.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
        <img
          src={require("../assets/images/dailysocial.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
        <img
          src={require("../assets/images/swa.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
        <img
          src={require("../assets/images/kumparan.jpg")}
          alt=""
          style={{ height: "30px" }}
        />
      </MDBRow>
      <MDBRow className="subtitle-home mt-5 mb-3" style={{ fontWeight: "300" }}>
        Partner Pembayaran
      </MDBRow>
      <MDBRow className="d-flex justify-content-left mb-5">
        <img
          src={require("../assets/images/bca-logo.png")}
          alt=""
          style={{ height: "30px", marginRight: "50px" }}
        />
        <img
          src={require("../assets/images/uob-logo.png")}
          alt=""
          style={{ height: "30px", marginRight: "50px" }}
        />
        <img
          src={require("../assets/images/logo-mastercard.jpeg")}
          alt=""
          style={{ height: "30px", marginRight: "50px" }}
        />
        <img
          src={require("../assets/images/visa-logo.jpeg")}
          alt=""
          style={{ height: "30px", marginRight: "50px" }}
        />
      </MDBRow>
    </MDBContainer>
  );
};

export default Broadcast;
