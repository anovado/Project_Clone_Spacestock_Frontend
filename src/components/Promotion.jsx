import React from "react";
import { MDBContainer, MDBRow } from "mdbreact";

const Promotion = () => {
  return (
    <MDBContainer
      className="my-5"
      // style={{ borderBottom: "1px solid #b6b6b3" }}
    >
      <MDBRow>
        <img src={require("../assets/images/covid.jpg")} alt="banner covid" />
      </MDBRow>
    </MDBContainer>
  );
};

export default Promotion;
