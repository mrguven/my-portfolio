import { useState, useEffect, useRef } from "react";
import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import "./myTaxi.css";
const center = {
  lat: 51.9244,
  lng: 4.4777,
};

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

export default function MyTaxi() {
  const [departure, setDeparture] = useState("");
  const [arriving, setArriving] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState(Number);
  const [travelTime, setTravelTime] = useState(Number);
  const [search, setSearch] = useState();
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [loadMap, setLoadMap] = useState();
  const [total, setTotal] = useState(Number);
  const result = useRef();
  const googleMapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [departureOptions, setDepartureOptions] = useState();
  const [arrivingOptions, setArrivingOptions] = useState();

  const savePlaceDetailsToState = () => {};

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

  const makeReservation = async (event) => {
    event.preventDefault();

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
  };

  //  const {
  //   placesService,
  //   placePredictions,
  //   getPlacePredictions,
  //   isPlacePredictionsLoading,
  // } = usePlacesService({
  //   apiKey: GOOGLE_MAP_API_KEY,
  // });

  // useEffect(() => {
  //   // fetch place details for the first element in placePredictions array
  //   if (placePredictions.length)
  //     placesService?.getDetails(
  //       {
  //         placeId: placePredictions[0].place_id,
  //       },
  //       (placeDetails) => savePlaceDetailsToState(placeDetails)
  //     );
  // }, [placePredictions]);

  useEffect(() => {
    setDistance(search?.routes[0]?.legs[0]?.distance.value / 1000);
    setTravelTime(search?.routes[0]?.legs[0]?.duration.value / 60);
    setTotal((distance * 3 + travelTime * 0.4).toFixed(2));
  });

  return (
    <div id="mainContainer">
      <div id="header">
        <h1 id="head">MayTax</h1>

        <h1 className="subHead">MayTax</h1>

        <h3>We Zijn Altijd Klaar...</h3>

        <h3>Altijd Bereikbaar</h3>

        <h3>7/24 Dienst</h3>
      </div>

      <div id="taxiInfoPart">
        <b>
          <i>
            Make reservation easly..
            <br />
            You can select date and destinations... <br />
          </i>
        </b>
      </div>
      <div id="extraInfo">
        <h3>
          <i>Do not hesitate to contact us</i> <br />
          <i>if you need to help</i>
        </h3>
      </div>

      <div id="adsPart"></div>

      <form action="/makeReservation" method="post" id="reservationInfo">
        <div id="daparture-Label">
          <label htmlFor="departure" className="reservationLabel">
            Departure:
          </label>
        </div>
        <div id="departure-Input">
          <input
            type="text"
            name="departure"
            required
            value={departure}
            onChange={(event) => {
              setDeparture(event.target.value);
            }}
            className="reservationInput"
            id="departure"
            placeholder="departure"
          />
        </div>
        <div id="arriving-Label">
          <label htmlFor="arriving" className="reservationLabel">
            Arriving:
          </label>
        </div>

        <div id="arriving-Input">
          <input
            type="text"
            name="arriving"
            value={arriving}
            onChange={(event) => setArriving(event.target.value)}
            className="reservationInput"
            required
            placeholder="arriving"
          />
        </div>
        <div id="reservation-Date-Label">
          <label htmlFor="date" className="reservationLabel">
            
            Date:
          </label>
        </div>
        <div id="reservation-Date-Input">
          <input
            type="datetime-local"
            name="time"
            className="reservationInput"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            required
          />
        </div>

        <div id="reservation-Button">
          <button
            type="submit"
            onClick={makeReservation}
            className="submitButtons"
          >
            Make Reservation
          </button>
        </div>
      </form>

      <div id="resultBox">
        {total > 0 && (
          <h2 id="result" ref={result}>
            
            total : {total} euro
          </h2>
        )}
      </div>

      <div id="mapsStyle" ref={googleMapRef} />
    </div>
  );
}
