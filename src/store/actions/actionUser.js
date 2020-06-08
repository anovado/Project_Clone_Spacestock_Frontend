import axios from "axios";

// function to sign in
export const doLogin = (props) => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "https://spacestockbe.andrenovado.my.id/signin",
      params: {
        email: getState().user.email,
        password: getState().user.kataKunci,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isLogin", true);
        }
      })
      .catch(async () => {
        await alert("Password atau Email anda salah!");
      });
  };
};

// function to handle input change
export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

// function to signup
export const doSignUp = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      email: getState().user.email,
      name: getState().user.namaLengkap,
      password: getState().user.kataKunci,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://spacestockbe.andrenovado.my.id/client", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// function to logout
export const doLogOut = (e) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
  return {
    type: "LOGOUT",
    payload: e,
  };
};

// // function to get user's data
// export const getUserData = (props) => {
//   return async (dispatch, getState) => {
//     const token = localStorage.getItem("token");
//     await axios
//       .get("https://spacestockbe.andrenovado.my.id/client", {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//           Accept: "application/json; charset=utf-8",
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then(async (response) => {
//         dispatch({ type: "GET_USER_DATA", payload: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };
