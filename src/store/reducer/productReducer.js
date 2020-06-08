const initialState = {
  //   token: "",
  //   statusError: true,
  allProducts: [],
  productDetails: [],
  cities: [],
  location: "",
  // modal: false,
  //   condition: false,
  //   zoom: 15,
  //   radius: 1000,
  //   sliderValue: 20,
};

export default function productReducer(productState = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_DATA":
      return {
        ...productState,
        allProducts: action.payload,
        cities: action.cities,
      };
    case "REQUEST_LIST_PRODUCT_DETAILS":
      return {
        ...productState,
        productDetails: action.payload,
        condition: true,
      };
    case "CHANGE_INPUT_LOCATION":
      return {
        ...productState,
        [action.payload.target.name]: action.payload.target.value,
        location: action.payload.target.value,
      };
    default:
      return productState;
  }
}
