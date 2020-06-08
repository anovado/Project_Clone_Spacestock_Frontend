import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBFormInline,
  MDBModal,
  MDBModalBody,
} from "mdbreact";

const Payment = (props) => {
  return (
    <MDBContainer className="payment-container mt-3 text-left">
      <p className="status-details-content mt-5 mb-0">Harga Sewa</p>
      <h2 className="tentang-unit mt-0" style={{ fontWeight: "bold" }}>
        Rp {props.product.price12}
      </h2>
      <p className="cicilan-perbulan">Cicilan Perbulan</p>
      <h2 className="tentang-unit" style={{ fontWeight: "bold" }}>
        Rp 11.980.000
      </h2>
      <div className="d-flex">
        <button type="button" className="button-tunai-cicilan pl-4">
          <MDBRow id="subtitle-inside-button">Tunai</MDBRow>
          <MDBRow id="details-inside-button">Cash</MDBRow>
        </button>
        <button type="button" className="button-tunai-cicilan-on pl-4">
          <MDBRow id="subtitle-inside-button-on">Cicilan</MDBRow>
          <MDBRow id="details-inside-button-on">Kartu Kredit</MDBRow>
        </button>
      </div>

      <form className="text-center mt-5" action="#!">
        <input
          type="text"
          id="defaultRegisterFormFirstName"
          className="form-control mb-4 input-form-in-payment"
          placeholder="Nama Lengkap"
        />
        <input
          type="email"
          id="defaultRegisterFormEmail"
          className="form-control mb-4 input-form-in-payment"
          placeholder="Email"
        />
        <input
          type="text"
          id="defaultRegisterFormPhone"
          className="form-control mb-4 input-form-in-payment"
          name="phone"
          defaultValue="+62"
        />
        <select className="browser-default custom-select mb-4 input-form-in-payment">
          <option defaultValue>Periode Sewa</option>
          <option value="1">1 Bulan</option>
          <option value="2">3 Bulan</option>
          <option value="3">6 Bulan</option>
          <option value="3">12 Bulan</option>
        </select>
        <select className="browser-default custom-select mb-4 input-form-in-payment">
          <option defaultValue>Waktu Kebutuhan</option>
          <option value="1">Segera</option>
          <option value="1">1 Bulan</option>
          <option value="2">2 Bulan</option>
          <option value="2">3 Bulan</option>
          <option value="3">4 Bulan</option>
          <option value="3">5 Bulan</option>
          <option value="3">6 Bulan</option>
          <option value="3">Lebih dari 6 Bulan</option>
        </select>
        <div className="form-group red-border-focus">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea5"
            rows="3"
            placeholder="Tinggalkan Pesan"
          ></textarea>
        </div>

        <button
          className="btn my-4 btn-block btn-submit-payment text-capitalize py-0"
          type="submit"
        >
          Submit
        </button>

        <hr />
      </form>
      <button
        className="btn my-4 btn-block btn-submit-whatsapp text-capitalize py-0"
        type="button"
        onClick={props.toggle}
      >
        <MDBIcon
          fab
          icon="whatsapp"
          style={{ color: "rgba(76, 169, 110, 0.9)", fontSize: "22px" }}
          className="mr-2 my-0"
        />{" "}
        Chat Kami
      </button>
      <MDBModal isOpen={props.isOpen} toggle={props.toggle} centered>
        <MDBModalBody toggle={props.toggle} className="contact-us-modal">
          <h2 className="modal-form-title mt-2 mb-4">
            Contact Us via WhatsApp
          </h2>

          <input
            type="text"
            id="defaultFormNameModalEx"
            placeholder="Name*"
            className="form-control form-control-sm modal-input-form"
            required
          />

          <br />
          <input
            type="email"
            id="materialFormEmailModalEx1"
            placeholder="Email*"
            className="form-control form-control-sm modal-input-form"
            required
          />
          <br />
          <MDBFormInline className="mr-auto m-auto phone-input-form d-flex align-items-center">
            <div
              className="px-1 pt-2"
              style={{
                borderRight: "1px solid #ccc",
                height: "100%",
                fontSize: "12px",
              }}
            >
              +62
            </div>
            <input
              type="tel"
              id="materialFormSubjectModalEx1"
              placeholder="WhatsApp Number*"
              className="form-control form-control-sm modal-input-form2 mt-0"
              required
            />
          </MDBFormInline>

          <div className="text-center my-3 ml-0">
            <button className="btn btn-primary btn-whatsapp-modal text-capitalize pt-2">
              WhatsApp Now
            </button>
          </div>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Payment;
