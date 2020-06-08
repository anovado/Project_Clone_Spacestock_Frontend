import React, { Fragment } from "react";
import Switch, { Item } from "react-switchable";
import "react-switchable/dist/main.css";
import $ from "jquery";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

const SearchBox = (props) => {
  const { allProducts } = props;

  const changeRouter = async (Category) => {
    if (props.handleRouter) {
      props.handleRouter(Category);
    }
  };

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

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="text-right">
          {/* Properti di Ujung Jari */}
        </MDBCol>
        <MDBCol md="6" className="text-right" style={{ marginTop: "100px" }}>
          <MDBRow className="d-flex justify-content-end mr-1">
            <p
              className="text-right"
              style={{
                fontSize: "32px",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                lineHeight: "35px",
              }}
            >
              Properti
              <br /> di Ujung Jari
            </p>
          </MDBRow>
          <div id="panel-in-jumbotron">
            <div id="inner-div-search">
              <MDBRow>
                <MDBCol md="8" className="text-left">
                  Cari
                </MDBCol>
                <MDBCol md="4" className="text-left">
                  Saya Ingin
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="8" className="mt-2">
                  <div>
                    <select className="browser-default custom-select">
                      <option
                        className="search-select-option"
                        value="apartemen"
                      >
                        Apartemen
                      </option>
                      <option className="search-select-option" value="kantor">
                        Kantor
                      </option>
                    </select>
                  </div>
                </MDBCol>
                <MDBCol md="3" className="ml-1 mt-1 text-left switch-button">
                  <Switch
                    name="sewa-beli"
                    onItemChanged={(newValue) =>
                      console.log("The new value is => ", newValue)
                    }
                  >
                    <Item className="item-switch" value="Sewa">
                      Sewa
                    </Item>
                    <Item className="item-switch" value="Beli">
                      Beli
                    </Item>
                  </Switch>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-1">
                <MDBCol md="12" className="text-left">
                  Cari Lokasi
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <MDBFormInline className="mr-auto m-0 search-input-form">
                    <div className="input-group-append ml-0 mr-2">
                      <MDBIcon
                        icon="search"
                        className="ml-2"
                        style={{ color: "rgba(195, 193, 193, 0.5)" }}
                      />
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
                      {allProducts.map((item, key) => (
                        <Fragment>
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
                    <MDBBtn
                      outline
                      color="#2ab934"
                      size="sm"
                      type="submit"
                      className="mr-auto"
                      id="search-button-jumbotron"
                      // onClick={() => changeRouter(item.id)}
                    >
                      Cari
                    </MDBBtn>
                  </MDBFormInline>
                </MDBCol>
              </MDBRow>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SearchBox;
