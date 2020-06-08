import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";

const Signature = (props) => {
  const { image } = props;
  return (
    <MDBContainer className="my-5">
      <MDBRow className="signature-container-background">
        <MDBCol md="4" className="pl-0">
          <img src={image} alt="signature" className="signature-picture" />
        </MDBCol>
        <MDBCol md="8" className="text-left mt-3 mb-2">
          <p className="signature-title my-2">
            <img
              src={require("../assets/images/logo-signature.png")}
              alt="signature"
              width="22px"
              className="pl-0 mr-2"
            />
            Apa itu Signature Listing ?
          </p>
          <p className="signature-details">
            Signature Listing adalah pilihan unit apartemen berkualitas siap
            huni yang sudah terkurasi oleh tim SpaceStock dengan metode
            pembayaran yang mudah.
          </p>
          <p className="signature-title">
            Keuntungan Menyewa Unit Signature Listing
          </p>
          <p className="signature-details font-weight-bold mb-0">
            Fully Furnished
          </p>
          <p className="signature-details">
            Sewa apartemen langsung siap huni dengan pilihan unit yang terisi
            kelengkapan perabot, mulai dari perlengkapan kamar tidur, kitchen
            set, perabotan ruang tamu, hingga water heater. Hanya perlu bawa
            koper!
          </p>
          <p className="signature-details font-weight-bold mb-0">
            Kebersihan Terjamin
          </p>
          <p className="signature-details">
            Hunian baru harus menjamin kebersihan untuk para penghuninya. Untuk
            itu, SpaceStock menjamin pengalaman terbaik untuk penghuni yang baru
            menempati unit apartemen melalui gratis jasa cleaning saat pertama
            check-in, kemudian menyediakan kelengkapan linen mulai dari sprei,
            sarung bantal, selimut, pelapis kasur, hingga handuk.
          </p>
          <p className="signature-details font-weight-bold mb-0">
            Cicilan Per Bulan
          </p>
          <p className="signature-details">
            Sewa tahunan, bisa bayar bulanan! Nikmati kemudahan pembayaran
            cicilan setiap bulan tanpa membebankan proses transaksi Anda. Metode
            pembayaran dapat dilakukan dengan kartu kredit dan tanpa kartu
            kredit.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signature;
