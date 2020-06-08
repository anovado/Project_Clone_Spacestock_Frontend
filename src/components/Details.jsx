import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Details = (props) => {
  return (
    <MDBContainer>
      <MDBRow className="my-2">
        {props.product.signature ? (
          <MDBCol md="3">
            <div className="ribbon-horizontal-pink ml-1 my-3 d-flex justify-content-center align-items-center">
              <div>
                <MDBIcon far icon="star" />
                Signature
              </div>
            </div>
          </MDBCol>
        ) : (
          false
        )}
        {props.product.free_service ? (
          <MDBCol md="3">
            <div className="ribbon-horizontal my-3">
              <span>Free Service Charge</span>
            </div>
          </MDBCol>
        ) : (
          false
        )}
      </MDBRow>
      <MDBRow className="mt-5">
        <h1 className="apartment-name mt-3">{props.product.name}</h1>
      </MDBRow>
      <MDBRow className="">
        <h2 className="apartment-unit-id">
          <span id="building-name-unit-id">{props.product.building}</span> -
          Unit ID: 00{props.product.id}
        </h2>
      </MDBRow>
      <MDBRow className="">
        <div className="grey-box-container mr-4">
          <div className=" d-flex">
            <img
              src={require("../assets/images/logo-condition.png")}
              className="status-details-logo"
              alt=""
            />
            <div className="ml-2 mt-1">
              <p className="status-details-title">Kondisi Unit</p>
              <p className="status-details-content">
                {props.product.condition}
              </p>
            </div>
          </div>
        </div>
        <div className="grey-box-container mr-4">
          <div className=" d-flex">
            <img
              src={require("../assets/images/logo-luas.png")}
              className="status-details-logo"
              alt=""
            />
            <div className="ml-2 mt-1">
              <p className="status-details-title">Luas</p>
              <p className="status-details-content">{props.product.size} SQM</p>
            </div>
          </div>
        </div>
        <div className="grey-box-container">
          <div className=" d-flex">
            <img
              src={require("../assets/images/logo-zone.png")}
              className="status-details-logo"
              alt=""
            />
            <div className="ml-2 mt-1">
              <p className="status-details-title">Zone</p>
              <p className="status-details-content">{props.product.zone}</p>
            </div>
          </div>
        </div>
      </MDBRow>
      <MDBRow className="tentang-unit mt-5">
        Tentang Unit
        <p className="tentang-unit-details text-left pl-0 ml-0">
          {props.product.description}
        </p>
      </MDBRow>
      <MDBRow className="tentang-unit mt-5">Kelengkapan Unit</MDBRow>
      <MDBRow className="grey-box-container" style={{ width: "635px" }}>
        {props.product.air_conditioner ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/air-conditioner.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />{" "}
            Ac
          </MDBCol>
        ) : (
          false
        )}
        {props.product.bed ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/bed.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />{" "}
            Bed
          </MDBCol>
        ) : (
          false
        )}
        {props.product.dining_table ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/dining-table.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Dining Table
          </MDBCol>
        ) : (
          false
        )}
        {props.product.electric_stove ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/electric-stove.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Electric Stove
          </MDBCol>
        ) : (
          false
        )}
        {props.product.gas_stove ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/gas-stove.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Gas Stove
          </MDBCol>
        ) : (
          false
        )}
        {props.product.kitchen_set ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/kitchen-set.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Kitchen Set
          </MDBCol>
        ) : (
          false
        )}
        {props.product.microwave ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/microwave.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Microwave
          </MDBCol>
        ) : (
          false
        )}
        {props.product.oven ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/oven.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Oven
          </MDBCol>
        ) : (
          false
        )}
        {props.product.refrigerator ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/refrigerator.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Refrigerator
          </MDBCol>
        ) : (
          false
        )}
        {props.product.sofa ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/sofa.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Sofa
          </MDBCol>
        ) : (
          false
        )}
        {props.product.tv ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/tv.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            TV
          </MDBCol>
        ) : (
          false
        )}
        {props.product.wardrobe ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/wardrobe.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Wardrobe
          </MDBCol>
        ) : (
          false
        )}
        {props.product.washing_machine ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/washing-machine.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Washing Machine
          </MDBCol>
        ) : (
          false
        )}
        {props.product.drying_machine ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/wash.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Drying Machine
          </MDBCol>
        ) : (
          false
        )}
        {props.product.water_heater ? (
          <MDBCol md="4" className="d-flex my-3">
            <img
              src={require("../assets/images/water-heater.png")}
              className="kelengkapan-unit-logo mr-1"
              alt=""
            />
            Water Heater
          </MDBCol>
        ) : (
          false
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default Details;
