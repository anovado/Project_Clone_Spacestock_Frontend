import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBView,
  MDBMask,
  MDBBtn,
} from "mdbreact";

const Invitation = () => {
  return (
    <MDBContainer
      className="my-5"
      //   style={{ borderBottom: "1px solid #b6b6b3" }}
    >
      <MDBRow>
        <MDBView>
          <img
            src={require("../assets/images/register-now.jpg")}
            alt="register now"
            className="img-fluid"
            style={{ borderRadius: "16px" }}
          />
          <MDBMask className="flex-center" style={{ borderRadius: "16px" }}>
            <MDBCol md="5"></MDBCol>
            <MDBCol md="5">
              <h3 className="text-left daftarkan-properti">
                Daftarkan Properti Anda!
              </h3>
              <p className="text-left desc-daftarkan-properti">
                Anda kesulitan menjual/menyewakan properti Anda? Mulai langkah
                Anda dengan mendaftar properti di SpaceStock, kemudian temukan
                berbagai keuntungan yang akan Anda dapatkan sebagai pemilik
                properti. Tim konsultan profesional kami siap menjadi solusi
                pemasaran unit Anda.
              </p>
              <MDBBtn className="hubungi-kami d-flex justify-content-left text-capitalize">
                Hubungi Kami!
              </MDBBtn>
            </MDBCol>
          </MDBMask>
        </MDBView>
      </MDBRow>
    </MDBContainer>
  );
};

export default Invitation;
