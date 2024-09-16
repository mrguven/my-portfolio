import { useState, useRef, useEffect } from "react";
import Footer from "../../components/Footer";
import "./contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
export default function Contact() {


  return (
    <div className="d-flex flex-column align-items-center" id="mainContainer-contact" >
      <div className="d-flex flex-row justify-content-center border-bottom border-primary w-100 my-5 pb-5">
        <div className="card m-2 align-items-center" style={{ width: "18rem" }}>
          <div>
            <LocationOnIcon
              className="card-img-top"
              sx={{ fontSize: 80, color: "#0077b6" }}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Adres</h5>
            <p className="card-text">ROTTERDAM</p>
          </div>
        </div>
        <div className="card m-2 align-items-center" style={{ width: "18rem" }}>
          <div>
            <LocalPhoneIcon
              className="card-img-top"
              sx={{ fontSize: 80, color: "#0077b6" }}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">Contact Number</h5>
            <p className="card-text">.............</p>
          </div>
        </div>
        <div className="card m-2 align-items-center" style={{ width: "18rem" }}>
          <div>
            <AlternateEmailIcon
              className="card-img-top"
              sx={{ fontSize: 80, color: "#0077b6" }}
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">E-Mail</h5>
            <p className="card-text">mrguven@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column align-items-center col-7">
        <form>
          <div className="mb-3">
            <label for="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Your Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
