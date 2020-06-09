import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import L from "leaflet";
import openGeocoder from "node-open-geocoder";
import "rc-tooltip/assets/bootstrap.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import WhiteNavbar from "../components/WhiteNavbar";
import Footer from "../components/Footer";
import Pictures from "../components/Pictures";
import Details from "../components/Details";
import Payment from "../components/Payment";
import AboutBuilding from "../components/AboutBuilding";
import Cards from "../components/Card";
import Signature from "../components/Signature";

import { getRes, getProductData } from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";

class Apartment extends Component {
  state = {
    modal: false,
    condition: false,
    zoom: 15,
    radius: 1000,
    sliderValue: 20,
  };
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    await this.props.getProductData();
    const paramCategory = await this.props.match.params.category;
    await this.props.getRes(paramCategory);

    let address = localStorage.getItem("address");
    this.geoCoding(address);
  };

  componentDidUpdate = async () => {
    // window.scrollTo(0, 0);
    let address = localStorage.getItem("address");
    if (this.state.condition) {
      this.setState({ condition: false });
      this.geoCoding(address);
    }
  };

  // function to convert string address to coordinate
  geoCoding = (address) => {
    let zoom;
    if (this.state.sliderValue <= 20) {
      zoom = 15;
    } else if (this.state.sliderValue > 20 && this.state.sliderValue <= 60) {
      zoom = 13;
    } else {
      zoom = 12;
    }
    openGeocoder()
      .geocode(address)
      .end((err, res) => {
        this.newRenderMap(
          res[0].lat,
          res[0].lon,
          zoom,
          this.state.sliderValue * 50
        );
      });
  };

  // function to render map
  newRenderMap = (lat, lon, zoom, radius) => {
    document.getElementById("mapid").innerHTML =
      "<div id='map' height: '458px' className='leaflet-container'></div>";
    const mymap = L.map("map").setView([lat, lon], zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      // attribution:
      //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ["a", "b", "c"],
      maxZoom: 18,
      tileSize: 512,
      zoomOffset: -1,
      detectRetina: true,
    }).addTo(mymap);

    const marker = L.marker([lat, lon]).addTo(mymap);
    L.circle([lat, lon], {
      color: "rgb(51, 136, 255)",
      fillColor: "blue",
      fillOpacity: 0.2,
      radius: radius,
    }).addTo(mymap);

    marker.bindPopup(localStorage.getItem("address"));
  };

  // function to toggle modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  // function to request data product per id
  handleRequestDetailProducts = async (CategoryName) => {
    await this.props.history.replace("/apartment/" + CategoryName);
    const paramCategory = await this.props.match.params.category;
    await this.props.getRes(paramCategory);
    this.setState({ condition: true });
    window.scrollTo(0, 0);
  };

  // function to handle slider element
  onSliderChange = (sliderValue) => {
    this.setState({
      sliderValue,
      condition: true,
    });
  };

  render() {
    const product = this.props.productDetails;
    const allProducts = this.props.allProducts;

    return (
      <div>
        <WhiteNavbar
          isOpen={this.state.modal}
          toggle={this.toggle}
          {...this.props}
          handleRouter={(e) => this.handleRequestDetailProducts(e)}
        />

        <Pictures
          image={product.image}
          image2={product.image2}
          image3={product.image3}
          image4={product.image4}
          image5={product.image5}
        />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <Details product={product} />
            </MDBCol>
            <MDBCol md="4">
              <Payment
                product={product}
                isOpen={this.state.modal}
                toggle={this.toggle}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer className="mt-2 mb-5">
          <MDBRow>
            <p className="subtitle-home ml-3">Transportasi Terdekat</p>
          </MDBRow>
          <MDBRow className="container-map-slider mb-5">
            <MDBCol md="8" className="px-0">
              <div
                id="mapid"
                className="leaflet-container ml-0"
                height="458px"
              ></div>
            </MDBCol>
            <MDBCol md="4">
              <div id="row-slider-map">
                <div className="my-4 d-flex justify-content-center">
                  <Slider
                    className="rc-slider rc-slider-step"
                    value={this.state.sliderValue}
                    onChange={this.onSliderChange}
                    min={20}
                    defaultValue={20}
                    marks={{
                      20: "1 Km",
                      40: "2 Km",
                      60: "3 Km",
                      80: "4 Km",
                      100: "5Km",
                    }}
                    step={null}
                  />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {product.signature ? <Signature image={product.image} /> : false}
        <MDBContainer className="mt-5">
          <MDBRow className="d-flex justify-content-between mt-5 mb-2">
            <h3 className="subtitle-home">Unit Lainnya</h3>
            <Link to="/" className="lihat-semua">
              Lihat Semua
            </Link>
          </MDBRow>
        </MDBContainer>

        <MDBContainer fluid className="mb-5">
          <MDBRow className="d-flex justify-content-center">
            {allProducts
              .sort(() => 0.5 - Math.random())
              .filter((value) => value.id !== product.id)
              .slice(0, 4)
              .map((el, index) => (
                <Cards
                  facing={el.facing}
                  size={el.size}
                  name={el.name}
                  building={el.building}
                  price12={el.price12}
                  zone={el.zone}
                  id={el.id}
                  image={el.image}
                  handleRouter={(e) => this.handleRequestDetailProducts(e)}
                  key={index}
                />
              ))}
          </MDBRow>
        </MDBContainer>
        <AboutBuilding
          building={product.building}
          address={product.address}
          about={product.about_building}
          building_image={product.building_image}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.product.allProducts,
    productDetails: state.product.productDetails,
    // condition: state.product.condition,
  };
};

const mapDispatchToProps = {
  getRes,
  getProductData,
  doLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Apartment);
