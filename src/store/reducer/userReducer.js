const initialState = {
  username: "",
  email: "",
  password: "",
  token: "",
  isLogin: false,
  //   email: "",
  kataKunci: "",
  namaLengkap: "",
  statusError: true,
  name: "",
};

export default function userReducer(userState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_USER":
      return {
        ...userState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_LOGIN":
      return {
        ...userState,
        email: action.payload.email,
        token: action.payload.token,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...userState,
        isLogin: false,
      };
    case "SUCESS_SIGNUP":
      return {
        ...userState,
        statusError: false,
      };
    //   case "GET_USER_DATA":
    //     return {
    //       ...userState,
    //       name: action.payload.name,
    //       email: action.payload.email,
    //       province: action.payload.province,
    //       city: action.payload.city,
    //       postal_code: action.payload.postal_code,
    //       street: action.payload.street,
    //       phone: action.payload.phone,
    //     }
    default:
      return userState;
  }
}
