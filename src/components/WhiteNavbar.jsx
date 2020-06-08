import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBFormInline,
  MDBModal,
  MDBModalBody,
} from "mdbreact";

const WhiteNavbar = (props) => {
  const { allProducts } = props;

  const changeRouter = async (Category) => {
    if (props.handleRouter) {
      props.handleRouter(Category);
    }
  };

  // const inputName = refs.name;
  // console.log("inputname", inputName);
  // inputName.addEventListener("change", function () {
  //   if (checkExists(inputName) === true) {
  //     changeRouter(inputName).value();
  //   }
  // });

  $("#name").bind("input", function () {
    if (checkExists($("#name").val()) === true) {
      changeRouter($("#name").val());
    }
  });

  const checkExists = (inputValue) => {
    const x = document.getElementById("potentials");
    let i;
    let flag;
    for (i = 0; i < x.options.length; i++) {
      if (+inputValue === +x.options[i].value) {
        flag = true;
      }
    }
    return flag;
  };

  const postSignout = async () => {
    await props.doLogOut();
    props.history.push("/");
  };

  const isLogin = localStorage.getItem("isLogin");

  return (
    <MDBContainer
      id="container-navbar-white"
      className="mt-0 mb-0"
      style={{ position: "sticky" }}
      fluid
    >
      <MDBNavbar
        color="white"
        dark
        expand="md"
        className="navbar-mdbnavbar d-flex align-items-center"
        style={{
          paddingLeft: "0px",
          paddingTop: "14px",
          marginLeft: "0px",
          fontSize: "14px",
        }}
      >
        <MDBNavbarBrand style={{ marginLeft: "180px" }}>
          <Link to="/">
            <img
              src={require("../assets/images/spacestock.svg")}
              style={{
                width: "148px",
                maxHeight: "31px",
                paddingLeft: "0px",
              }}
              alt="logo"
            />
          </Link>
        </MDBNavbarBrand>

        <MDBNavbarToggler />
        <MDBNavbarNav id="nav-item-white">
          <MDBNavItem>
            <MDBFormInline
              className="mr-auto m-0 ml-1 search-input-form"
              style={{ width: "590px", border: "1px solid #c3c1c1" }}
            >
              <div className="dropdown">
                <button
                  className="dropbtn d-flex justify-content-between"
                  style={{
                    borderRadius: "8px 0 0 8px",
                    backgroundColor: "#f15c60",
                    padding: "6px 10px 6px 15px",
                    color: "white",
                    width: "125px",
                  }}
                >
                  Apartemen{" "}
                  <MDBIcon
                    icon="caret-down"
                    style={{
                      color: "white",
                      paddingTop: "5px",
                      fontSize: "16px",
                    }}
                  />
                </button>
                <div className="dropdown-content">
                  <Link to="#">Apartemen</Link>
                  <Link to="#">Kantor</Link>
                </div>
              </div>
              <input
                className="form-control search-input-text"
                type="text"
                placeholder="Ketik lokasi atau nama gedung"
                aria-label="Search"
                autoComplete="off"
                id="name"
                list="potentials"
              />
              <datalist id="potentials">
                {allProducts.map((item, index) => (
                  <Fragment key={index}>
                    <option id="option-list" value={item.id}>
                      {item.city}
                    </option>
                    <option id="option-list" value={item.id}>
                      {item.building}
                    </option>
                  </Fragment>
                ))}
                ;
              </datalist>
              <div className="input-group-append ml-0 mr-2">
                <MDBIcon
                  icon="search"
                  style={{ color: "rgba(195, 193, 193, 0.5)" }}
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>
          <MDBLink
            type="button"
            className="text-reset font-weight-bold ml-5 mr-0 my-auto"
            data-toggle="modal"
            data-target="#modalContactForm"
            onClick={props.toggle}
            to="#"
          >
            <MDBIcon
              brand
              icon="whatsapp"
              className="logo-icon-whatsapp"
              style={{
                color: "#29a860 !important",
                fontSize: "17px",
                fontWeight: "600",
              }}
            />{" "}
            Hubungi kami
          </MDBLink>
          <MDBModal isOpen={props.isOpen} toggle={props.toggle} centered>
            <MDBModalBody toggle={props.toggle} className="contact-us-modal">
              <h2 className="modal-form-title mt-2 mb-4">
                Contact Us via WhatsApp
              </h2>

              <input
                type="text"
                id="nameInput"
                placeholder="Name*"
                className="form-control form-control-sm modal-input-form"
                required
              />

              <br />
              <input
                type="email"
                id="emailInput"
                placeholder="Email*"
                className="form-control form-control-sm modal-input-form"
                required
              />
              <br />
              <MDBFormInline className="mr-auto m-auto phone-input-form d-flex align-items-center">
                <div
                  className="px-1 pt-2"
                  style={{
                    borderRight: "1px solid #ccc",
                    height: "100%",
                    fontSize: "12px",
                  }}
                >
                  +62
                </div>
                <input
                  type="tel"
                  id="whatsappNumber"
                  placeholder="WhatsApp Number*"
                  className="form-control form-control-sm modal-input-form2 mt-0"
                  required
                />
              </MDBFormInline>

              <div className="text-center my-3 ml-0">
                <button className="btn btn-primary btn-whatsapp-modal text-capitalize pt-2">
                  WhatsApp Now
                </button>
              </div>
            </MDBModalBody>
          </MDBModal>
          {isLogin ? (
            <MDBLink
              onClick={() => postSignout()}
              className="text-reset my-auto ml-0 font-weight-bold"
              style={{ marginRight: "200px", color: "#f15c60" }}
            >
              Logout
            </MDBLink>
          ) : (
            <MDBLink
              className="text-reset my-auto ml-0 font-weight-bold"
              style={{ marginRight: "200px" }}
              to="/signin"
            >
              Login/Register
            </MDBLink>
          )}
        </MDBNavbarNav>
      </MDBNavbar>
    </MDBContainer>
  );
};

export default WhiteNavbar;
