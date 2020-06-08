import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Pictures = (props) => {
  const { image, image2, image3, image4, image5 } = props;
  return (
    <MDBContainer style={{ marginTop: "20px" }}>
      <MDBRow>
        <MDBCol md="3">
          <div>
            <img className="frame-in-pictures py-1" src={image2} alt="" />
          </div>
          <div>
            <img className="frame-in-pictures py-1" src={image3} alt="" />
          </div>
        </MDBCol>
        <MDBCol md="3">
          <div>
            <img className="frame-in-pictures py-1" src={image4} alt="" />
          </div>
          <div>
            <img className="frame-in-pictures py-1" src={image5} alt="" />
          </div>
        </MDBCol>
        <MDBCol md="6">
          <img
            className="frame-in-pictures py-1"
            style={{ width: "608px", height: "434px" }}
            src={image}
            alt=""
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Pictures;
