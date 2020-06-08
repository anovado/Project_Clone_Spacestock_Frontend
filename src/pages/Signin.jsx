import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MDBContainer } from "mdbreact";
import { doLogin, changeInputUser } from "../store/actions/actionUser";

class Signin extends Component {
  // function to handle signin
  postLogin = async () => {
    await this.props.doLogin();
    const isLogin = this.props.login;
    if (isLogin) {
      this.props.history.push("/");
    } else {
      alert("Login anda gagal!");
    }
  };

  render() {
    return (
      <MDBContainer>
        <div className="row text-center d-flex justify-content-center">
          <div className="text-center mt-5">
            <div
              className=" d-flex text-center justify-content-center mt-3 mb-3"
              style={{ paddingTop: "5px" }}
            >
              <Link to="/">
                <img
                  src={require("../assets/images/spacestock.svg")}
                  alt="logo spacestock"
                  style={{ width: "170px" }}
                />
              </Link>
            </div>
            <div
              className="text-left mt-3"
              style={{
                width: "22rem",
                color: "RGB(17,17,17)",
                border: "1px solid #f15c60",
                backgroundColor: "#fbfbfb",
                borderRadius: "8px",
                paddingLeft: "15px",
              }}
            >
              <h5
                style={{
                  fontSize: "25px",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                Sign-In
              </h5>
              <div
                className="border-top"
                style={{
                  marginBottom: "20px",
                  borderTop: "1px solid #ddd",
                  boxShadow: "5px 10px 18px #ddd",
                  marginLeft: "10px",
                  width: "89%",
                }}
              ></div>
              <form method="POST" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label
                    for=" email"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id=""
                    aria-describedby="emailHelp"
                    style={{ width: "95%" }}
                    onChange={(e) => this.props.changeInput(e)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label
                    for=" password"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="kataKunci"
                    className="form-control"
                    id=""
                    style={{ width: "95%" }}
                    onChange={(e) => this.props.changeInput(e)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={() => this.postLogin()}
                  className="btn register-new-account mb-1 text-capitalize"
                >
                  Sign In
                </button>
                <div className="text-center mb-3">
                  <Link className="small" to="/signup">
                    Belum punya akun? Daftar di sini
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
    kataKunci: state.user.kataKunci,
    login: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
