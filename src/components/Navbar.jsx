import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBFormInline,
} from "mdbreact";
import { Link } from "react-router-dom";

const Navbar = (props, postSignout) => {
  // function to logout
  postSignout = async () => {
    await props.doLogOut();
    props.history.push("/");
  };

  const isLogin = localStorage.getItem("isLogin");
  return (
    <MDBContainer>
      <MDBNavbar
        color="transparent"
        dark
        expand="md"
        className="navbar-mdbnavbar"
        style={{ paddingLeft: "0px", marginLeft: "0px", fontSize: "14px" }}
      >
        <MDBNavbarBrand>
          <img
            src={require("../assets/images/spacestock.svg")}
            style={{ width: "138px", maxHeight: "29px", paddingLeft: "0px" }}
            alt="logo"
          />
        </MDBNavbarBrand>
        <MDBNavbarToggler />
        <MDBNavbarNav right>
          <MDBNavItem>
            <div className="dropdown text-reset">
              <button className="dropdown-navbar">
                Apartemen <MDBIcon icon="angle-down" />
              </button>
              <div className="dropdown-content">
                <Link to="#">Beli Unit Apartemen</Link>
                <hr className="hr-in-dropdown" />
                <Link to="#">Sewa Unit Apartemen</Link>
                <hr className="hr-in-dropdown" />
                <Link to="#">Apartemen Baru</Link>
              </div>
            </div>
          </MDBNavItem>
          <MDBNavItem>
            <MDBLink className="text-reset" to="#!">
              Kantor
            </MDBLink>
          </MDBNavItem>
          <MDBNavItem style={{ color: "#f15c60" }}>
            <MDBLink className="text-reset" to="#!">
              Titip Jual/Sewa
            </MDBLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBLink
              type="button"
              className="text-reset"
              data-toggle="modal"
              data-target="#modalContactForm"
              onClick={props.toggle}
            >
              <MDBIcon brand icon="whatsapp" style={{ color: "#47c556" }} />{" "}
              Hubungi kami
            </MDBLink>
            <MDBModal isOpen={props.isOpen} toggle={props.toggle} centered>
              {/* <MDBModalHeader>
                </MDBModalHeader> */}
              <MDBModalBody toggle={props.toggle} className="contact-us-modal">
                <h2 className="modal-form-title mt-2 mb-4">
                  Contact Us via WhatsApp
                </h2>

                <input
                  type="text"
                  id="defaultFormNameModalEx"
                  placeholder="Name*"
                  className="form-control form-control-sm modal-input-form"
                  required
                />

                <br />
                <input
                  type="email"
                  id="materialFormEmailModalEx1"
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
                    id="materialFormSubjectModalEx1"
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
          </MDBNavItem>
          <MDBNavItem>
            {isLogin ? (
              <MDBLink
                className="text-reset"
                to="#"
                onClick={() => postSignout()}
              >
                Logout
              </MDBLink>
            ) : (
              <MDBLink className="text-reset" to="/signin">
                Login/Register
              </MDBLink>
            )}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    </MDBContainer>
  );
};

export default Navbar;
