
import { useState,useRef,useEffect } from "react"
import Footer from "../../components/Footer";
import  "./contact.css";

export default function Contact (){

const [playlist,setPlaylist]=useState();








    return(
        <div>

<div class="row contact-details">
			  
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-map-marker"></i><span>Address</span></h2>
                  <p>23 Ipsum street, New York</p>
                </div>
              </div>
			 
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-mobile"></i><span>Phone</span></h2>
                  <p>+12 345 6789</p>
                </div>
              </div>
			  
              <div className="col-md-4">
                <div className="dark-box box-hover">
                  <h2><i className="fa fa-paper-plane"></i><span>Email</span></h2>
                  <p><a href="index.html#">info@themewagon.com</a></p>
                </div>
              </div>
            </div>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            <Footer />
        </div>

        
    )
}