import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Panel = () => {
  return (
    <MDBContainer id="container-panel" fluid>
      <MDBContainer>
        <MDBRow className="py-4">
          <MDBCol>
            <img
              src={require("../assets/images/logo-panel-1.png")}
              alt="logo"
            />
            <p>Apartemen Baru</p>
          </MDBCol>
          <MDBCol>
            <img
              src={require("../assets/images/logo-panel-2.png")}
              alt="logo"
            />
            <p>Apartemen</p>
          </MDBCol>
          <MDBCol>
            <img
              src={require("../assets/images/logo-panel-3.png")}
              alt="logo"
            />
            <p>Apartemen Signature</p>
          </MDBCol>
          <MDBCol>
            <img
              src={require("../assets/images/logo-panel-4.png")}
              alt="logo"
            />
            <p>Kantor</p>
          </MDBCol>
          <MDBCol>
            <img
              src={require("../assets/images/logo-panel-5.png")}
              alt="logo"
            />
            <p>Titip Jual / Sewa</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Panel;
