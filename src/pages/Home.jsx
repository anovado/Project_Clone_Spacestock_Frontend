import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MDBContainer, MDBRow } from "mdbreact";
import AOS from "aos";

import Navbar from "../components/Navbar";
import NavbarSticky from "../components/NavbarSticky";
import JumbotronPage from "../components/Jumbotron";
import Panel from "../components/Panel";
import Promotion from "../components/Promotion";
import Carousels from "../components/Carousel";
import Cards from "../components/Card";
import Invitation from "../components/Invitation";
import Services from "../components/Service";
import Broadcast from "../components/Broadcast";
import Footer from "../components/Footer";
import Articles from "../components/Articles";

import { getProductData, getRes } from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";

class Home extends Component {
  state = {
    modal: false,
    showNav: false,
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    this.props.getProductData();
    window.addEventListener("scroll", this.showNavbar);
    AOS.init();
  };

  // function to request data product per id
  handleRequestDetailProducts = async (CategoryName) => {
    await this.props.history.replace("/apartment/" + CategoryName);
    const paramCategory = this.props.match.params.category;
    this.props.getRes(paramCategory);
  };

  // function to toggle modal
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  // function to handle scrolling
  showNavbar = () => {
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) >= 500) {
      this.setState({
        showNav: true,
      });
    } else {
      this.setState({
        showNav: false,
      });
    }
  };

  render() {
    const allProducts = this.props.allProducts;
    return (
      <div>
        <Navbar
          isOpen={this.state.modal}
          toggle={this.toggle}
          {...this.props}
        />
        <JumbotronPage
          {...this.props}
          handleRouter={(e) => this.handleRequestDetailProducts(e)}
        />
        {this.state.showNav ? (
          <NavbarSticky
            isOpen={this.state.modal}
            toggle={this.toggle}
            {...this.props}
            handleRouters={(e) => this.handleRequestDetailProducts(e)}
          />
        ) : null}
        <Panel onScroll={this.showNavbar} />
        <Promotion />
        <MDBContainer className="my-5">
          <hr />
        </MDBContainer>
        <Carousels />
        <MDBContainer>
          <MDBRow className="d-flex justify-content-between mt-5 mb-2">
            <h3 className="subtitle-home">Apartemen Pilihan</h3>
            <Link to="/" className="lihat-semua">
              Lihat Semua
            </Link>
          </MDBRow>
        </MDBContainer>
        <MDBContainer fluid>
          <MDBRow className="d-flex justify-content-center" fluid>
            {allProducts.slice(0, 4).map((el, index) => (
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
              />
            ))}
          </MDBRow>
        </MDBContainer>
        <Invitation />
        <Services />
        <Articles />
        <Broadcast />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.product.allProducts,
    cities: state.product.cities,
  };
};

const mapDispatchToProps = {
  getRes,
  getProductData,
  doLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
