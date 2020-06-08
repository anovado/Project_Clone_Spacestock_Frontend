import axios from "axios";
// import L from "leaflet";
// import openGeocoder from "node-open-geocoder";

// action creator
export const changeInputProduct = (e) => {
  return {
    type: "CHANGE_INPUT_PRODUCT",
    payload: e,
  };
};

// function to get product data
export const getProductData = (props) => {
  return async (dispatch) => {
    await axios
      .get("https://spacestockbe.andrenovado.my.id/apartment", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({
          type: "GET_PRODUCT_DATA",
          payload: response.data,
          cities: response.data.map((el) => el.city),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// function to get product by id
export const getRes = (category) => {
  return async (dispatch) => {
    localStorage.removeItem("address");
    const response = await axios.get(
      "https://spacestockbe.andrenovado.my.id/apartment/" + category
    );

    dispatch({
      type: "REQUEST_LIST_PRODUCT_DETAILS",
      payload: response.data,
    });
    localStorage.setItem("address", response.data.address.split(",").slice(1));
  };
};
