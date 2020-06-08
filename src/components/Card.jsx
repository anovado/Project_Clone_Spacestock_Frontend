import React from "react";
import {
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
} from "mdbreact";

const Cards = (props) => {
  const { name, image, id, facing, size, building, price12, zone } = props;

  const changeRouter = async (Category) => {
    if (props.handleRouter) {
      await props.handleRouter(Category);
    } else {
      await props.history.replace("/apartment/" + Category);
    }
  };

  return (
    <MDBCol
      style={{ maxWidth: "21rem", paddingRight: "5px", paddingLeft: "5px" }}
      className="mb-2"
    >
      <MDBCard className="card-box-apartemen" onClick={() => changeRouter(id)}>
        <MDBCardImage
          className="img-fluid"
          src={image}
          style={{ borderRadius: "16px 16px 0px 0px" }}
          waves
        />
        <div className="d-flex justify-content-between icon-details-location">
          <div className="icon-details-tag">
            <MDBIcon icon="city" /> City
          </div>
          <div className="icon-details-tag">
            <MDBIcon far icon="compass" /> {facing}
          </div>
          <div className="icon-details-tag">
            <MDBIcon far icon="building" /> {size} sqm
          </div>
        </div>
        <MDBCardBody
          className="text-left"
          style={{ fontFamily: "Inter UI, sans-serif" }}
        >
          <MDBCardTitle className="title-inside-card">{name}</MDBCardTitle>
          <p className="gedung-card">{building}</p>
          <p className="harga-sewa-mulai">Harga sewa mulai</p>
          <p className="price-in-card">
            Rp. {price12} <span className="per-tahun">/ tahun</span>
          </p>
          <p className="dapat-dicicil">
            Dapat dicicil dengan Kartu Kredit / Non KK
          </p>
          <p className="d-flex justify-content-space-between card-details">
            Recently Updated • Full Furnished • {zone} Zone
          </p>
          <p className="unit-id-card">Unit ID: 00{id}</p>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Cards;
