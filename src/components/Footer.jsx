import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4">
      <MDBContainer
        fluid
        style={{
          backgroundColor: "#f8fafb",
          color: "rgb(42, 48, 56)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <MDBContainer className="text-center text-md-left pt-5">
          <MDBRow>
            <MDBCol md="5">
              <Link to="/">
                <h5 className="footer-title">Apartemen Populer</h5>
              </Link>
            </MDBCol>
            <MDBCol md="5">
              <Link to="/">
                <h5 className="footer-title">Kantor Populer</h5>
              </Link>
            </MDBCol>
            <MDBCol md="2">
              <Link to="/">
                <h5 className="footer-title">Lokasi Populer</h5>
              </Link>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-2">
            <MDBCol md="2">
              <Link to="/">
                <p>Sudirman Park Apartment</p>
              </Link>
              <Link to="/">
                <p>1 Park Residences</p>
              </Link>
              <Link to="/">
                <p>Belmont Residence</p>
              </Link>
              <Link to="/">
                <p>Season City</p>
              </Link>
            </MDBCol>
            <MDBCol md="3">
              <Link to="/">
                <p>Green Pramuka</p>
              </Link>
              <Link to="/">
                <p>Bassura City</p>
              </Link>
              <Link to="/">
                <p>Casa Grande Residence</p>
              </Link>
              <Link to="/">
                <p>Sahid Sudirman Residence</p>
              </Link>
            </MDBCol>
            <MDBCol md="2">
              <Link to="/">
                <p>Cyber 2 Tower</p>
              </Link>
              <Link to="/">
                <p>Centennial Tower</p>
              </Link>
              <Link to="/">
                <p>DBS Bank Tower</p>
              </Link>
              <Link to="/">
                <p>Menara Mandiri 1</p>
              </Link>
            </MDBCol>
            <MDBCol md="3">
              <Link to="/">
                <p>The Energy Tower</p>
              </Link>
              <Link to="/">
                <p>One Pacific Place</p>
              </Link>
              <Link to="/">
                <p>Menara Standard Chartered</p>
              </Link>
              <Link to="/">
                <p>Indofood Tower</p>
              </Link>
            </MDBCol>
            <MDBCol md="2">
              <Link to="/">
                <p>Jakarta Utara</p>
              </Link>
              <Link to="/">
                <p>Jakarta Pusat</p>
              </Link>
              <Link to="/">
                <p>Jakarta Timur</p>
              </Link>
              <Link to="/">
                <p>Jakarta Selatan</p>
              </Link>
              <Link to="/">
                <p>Jakarta Barat</p>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
      <MDBContainer
        className="text-left py-5"
        style={{
          color: "rgb(42, 48, 56)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <MDBRow>
          <MDBCol md="2">
            <h5 className="footer-title">SpaceStock</h5>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/">
              <p>Apartemen</p>
            </Link>
            <Link to="/">
              <p>Kantor</p>
            </Link>
            <Link to="/">
              <p>Titip Jual/Sewa</p>
            </Link>
            <Link to="/">
              <p>Artikel</p>
            </Link>
            <Link to="/">
              <p>Direktori Gedung</p>
            </Link>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="footer-title">Apartemen</h5>
            <Link to="/">
              <p>Beli Unit Apartemen</p>
            </Link>
            <Link to="/">
              <p>Sewa Unit Apartemen</p>
            </Link>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="footer-title">Bantuan</h5>
            <Link to="/">
              <p>Syarat & Ketentuan</p>
            </Link>
            <Link to="/">
              <p>Kebijakan Privasi</p>
            </Link>
            <Link to="/">
              <p>Tentang SpaceStock</p>
            </Link>
            <Link to="/">
              <p>FAQ</p>
            </Link>
            <Link to="/">
              <p>Hubungi Kami</p>
            </Link>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="3" className="text-right">
            <MDBRow className="d-flex justify-content-end">
              <img
                src={require("../assets/images/spacestock.svg")}
                alt="logo perusahaan"
                style={{ height: "31px" }}
              />
            </MDBRow>
            <MDBRow className="footer-address mt-4">
              <MDBIcon icon="map-marker-alt" style={{ color: "#c5c6c6" }} />{" "}
              Sahid Sudirman Center Lt. 23 Jalan Jendral Sudirman Kav. 86
              Jakarta Pusat, 10220
            </MDBRow>
            <MDBRow className="footer-address mt-2">
              <MDBIcon fab icon="whatsapp" style={{ color: "#47c556" }} />{" "}
              Whatsapp
            </MDBRow>
            <MDBRow className="footer-address mt-2">
              <MDBIcon far icon="envelope" style={{ color: "#c5c6c6" }} />{" "}
              inquiry@spacestock.com
            </MDBRow>
            <MDBRow className="d-flex justify-content-end mt-5">
              <a href="https://facebook.com" target="blank">
                <img
                  src={require("../assets/images/facebook.png")}
                  alt="facebook"
                  style={{ width: "32px", marginRight: "5px" }}
                />
              </a>
              <a href="https://twitter.com" target="blank">
                <img
                  src={require("../assets/images/twitter.png")}
                  alt="twitter"
                  style={{ width: "32px", marginRight: "5px" }}
                />
              </a>
              <a href="https://instagram.com" target="blank">
                <img
                  src={require("../assets/images/instagram.png")}
                  alt="instagram"
                  style={{ width: "32px" }}
                />
              </a>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-end text-right mb-5">
          <p>Copyright 2020 PT Menara Inovasi Realti. All rights reserved.</p>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
