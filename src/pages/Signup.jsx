import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MDBContainer } from "mdbreact";

import { changeInputUser, doSignUp } from "../store/actions/actionUser";

class Signup extends Component {
  postSignUp = async () => {
    console.warn("masuk function postsignup");
    await this.props.doSignUp();
    this.props.statusError
      ? alert("You have not registered")
      : this.props.history.push("/signin");
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
                Sign-Up
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
                    aria-describedby="emailHelp"
                    style={{ width: "95%" }}
                    onChange={(e) => this.props.changeInput(e)}
                    required
                    autoFocus
                  />
                </div>
                <div className="form-group">
                  <label
                    for=" name"
                    style={{ fontSize: "13px", fontWeight: "bold" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="namaLengkap"
                    className="form-control"
                    aria-describedby="nameHelp"
                    style={{ width: "95%" }}
                    onChange={(e) => this.props.changeInput(e)}
                    required
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
                    style={{ width: "95%" }}
                    onChange={(e) => this.props.changeInput(e)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn register-new-account mb-1 text-capitalize"
                  onClick={() => this.postSignUp()}
                >
                  Sign In
                </button>
                <div className="text-center mb-3">
                  <Link className="small" to="/signin">
                    Sudah punya akun? Login di sini
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
    namaLengkap: state.user.namaLengkap,
    login: state.user.isLogin,
    status: state.user.status,
  };
};

const mapDispatchToProps = {
  doSignUp: doSignUp,
  changeInput: (e) => changeInputUser(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
