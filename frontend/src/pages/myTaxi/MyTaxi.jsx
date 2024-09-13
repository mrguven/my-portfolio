import { useState, useEffect, useRef } from "react";
import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Footer from "../../components/Footer";
import MyBinek from "./taxi-sign.jpg";
import "./myTaxi.css";

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MyTaxi() {
  const [departure, setDeparture] = useState("");
  const [arriving, setArriving] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState(Number);
  const [travelTime, setTravelTime] = useState(Number);
  const [search, setSearch] = useState();
  const [gotDistance, setGotDistance] = useState(false);
  const [total, setTotal] = useState(Number);
  const [showImage, setshowImage] = useState(true);
  const [inputError, setinputError] = useState("");
  const [showTravelHour, setshowTravelHour] = useState("");
  const [showTravelMin, setshowTravelMin] = useState("");
  const result = useRef();
  const googleMapRef = useRef(null);

  function PriceReserveButton() {
    if (gotDistance === false) {
      return (
        <div className="p-1" id="reservation-Button">
          <button type="submit" onClick={seePrice} className="submitButtons">
            See Price
          </button>
        </div>
      );
    } else if (gotDistance === true) {
      return (
        <div className="p-1" id="reservation-Button">
          <button
            type="submit"
            onClick={makeReservation}
            className="submitButtons"
          >
            Request MyBinek
          </button>
        </div>
      );
    }
  }

  let newmap;
  const getMap = async () => {
    const loader = new Loader({
      apiKey: GOOGLE_MAP_API_KEY,
      version: "weekly",
      libraries: ["geometry"],
    });

    loader.load().then(async () => {
      const { Map } = await window.google.maps.importLibrary("maps");

      newmap = new Map(googleMapRef.current, {
        center: {
          lat: 51.9244,
          lng: 4.4777,
        },
        zoom: 10,
      });
    });
  };

  useEffect(() => {
    getMap();
    window.onload = function () {
      let today = new Date().toISOString().split("T")[0];
      document.getElementsByName("time")[0].setAttribute("min", today);
    };
  }, []);

  const seePrice = async (event) => {
    if (arriving && departure) {
      event.preventDefault();
      setGotDistance(true);
      setshowImage(false);
      const loader = new Loader({
        apiKey: GOOGLE_MAP_API_KEY,
        version: "weekly",
        libraries: ["geometry"],
      });

      loader.load().then(async () => {
        const { Map } = await window.google.maps.importLibrary("maps");
        newmap = new Map(googleMapRef.current, {
          center: {
            lat: 51.9244,
            lng: 4.4777,
          },
          zoom: 10,
        });
      });
      let directionsService = new window.google.maps.DirectionsService();
      let directionsRenderer = new window.google.maps.DirectionsRenderer();
      let request = {
        origin: departure,
        destination: arriving,
        travelMode: "DRIVING",
      };
      await directionsService.route(request, function (response, status) {
        if (status == "OK") {
          directionsRenderer.setDirections(response);

          directionsRenderer.setMap(newmap);
          setSearch(response);
        }
      });
      googleMapRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setinputError("please enter adress");
      setTimeout(() => {
        setinputError("");
      }, 2000);
    }
  };

  const makeReservation = (asd) => {
    setGotDistance(false);
    setArriving("");
    setDeparture("");
    alert("Thank you for request, YourBinek is onderway");
  };
  useEffect(() => {
    setDistance(search?.routes[0]?.legs[0]?.distance.value / 1000);
    setTravelTime(search?.routes[0]?.legs[0]?.duration.value / 60);
    setTotal((distance * 3 + travelTime * 0.4).toFixed(2));
    if (travelTime > 60) {
      setshowTravelHour(Math.trunc(Math.trunc(travelTime) / 60));
      setshowTravelMin(Math.trunc(travelTime) % 60);
      if (Math.trunc(travelTime) % 60 === 0) {
        setshowTravelMin(null);
      }
    } else if (Math.trunc(travelTime) < 60) {
      setshowTravelHour(null);
      setshowTravelMin(Math.trunc(travelTime));
    } else {
      setshowTravelMin(Math.trunc(travelTime));
    }
  });

  const mapsStyle = {
    width: "100% !important",
    height: "500px !important",
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row mt-5 mx-2 justify-content-evenly">
        <div className="d-flex flex-row col-1"></div>
        <div className="d-flex flex-column border-right">
          <div className="p-1">
            <div id="taxiInfoPart">
              <p>
                <b>Go anywhere with MyBinek</b>
              </p>
            </div>
          </div>
          <div className="p-1">
            <p>
              <b>
                <i>
                  Your vehicle is always ready for you... <br />
                </i>
              </b>
            </p>
          </div>
          <div className="p-1">
            <form action="/makeReservation" method="post">
              <div className="d-flex flex-column mb-3" id="reservation-info">
                <div className="p-1 m-1" id="departure-Input">
                  <input
                    type="text"
                    name="departure"
                    required
                    value={departure}
                    onChange={(event) => {
                      setDeparture(event.target.value);
                    }}
                    className="reservationInput ps-3"
                    id="departure"
                    placeholder="Location"
                  />
                </div>

                <div className="p-1 m-1" id="arriving-Input">
                  <input
                    type="text"
                    name="arriving"
                    value={arriving}
                    onChange={(event) => setArriving(event.target.value)}
                    className="reservationInput ps-3"
                    required
                    placeholder="Destination"
                  />
                </div>
                <div
                  className="p-1 m-1 d-flex flex-row"
                  id="reservation-Date-Input"
                >
                  <input
                    type="datetime-local"
                    name="time"
                    className="reservationInput ps-3"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    required
                  />
                  <span
                    className="ps-3 text-primary align-self-center"
                    id="reserv-explanation"
                  >
                    ?
                  </span>
                </div>
                {/* <div className="p-1 ps-3 align-self-center">
                  <span id="explanation-text">
                    if you want to make a reservation, select a date
                  </span>
                </div> */}
                <div className="p-1" id="reservation-Button">
                  <PriceReserveButton />
                  <p>{inputError && inputError}</p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={`${showImage ? "d-none" : "p-1 align-self-center"} `}>
          {total > 0 && (
            <>
              <h4 id="travel-info" className="p-1 text-center">
                Travel Info
              </h4>
              <div className="result d-flex flex-row mx-1">
                <div className="p-1 d-flex flex-column align-content-start">
                  <div className="p-1">
                    <p>5 min away</p>
                  </div>
                  <div className="p-1">
                    <h5>
                      Estimated Time: {showTravelHour && showTravelHour + "h"}{" "}
                      {showTravelMin && showTravelMin + "min"}
                    </h5>
                  </div>
                  <div className="p-1">
                    <h5 className="text-warning">
                      {" "}
                      &#9734; &#9734; &#9734; &#9734;
                    </h5>
                  </div>
                </div>
                <div className="p-1 ms-5">
                  <div className="p-1align-self-center">
                    <h4 ref={result}>{total}€</h4>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className={`p-1 ${showImage ? "col-6" : "col-5"}`}>
          {showImage ? (
            <div>
              <img className="taxi-image" src={MyBinek} alt="taxi image" />
            </div>
          ) : (
            <div className="p-1" id="mapsStyle" ref={googleMapRef} />
          )}
        </div>
      </div>
      <div className="p-1 m-5">
        <div id="extraInfo">
          <h4>
            <i>Do not hesitate to contact us</i> <br />
            <i>if you need to help</i>
          </h4>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
