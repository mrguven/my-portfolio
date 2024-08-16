// import React, { useEffect, useRef, useState } from 'react';
// import { GoogleMap, Marker, useLoadScript,DirectionsRenderer } from "@react-google-maps/api";
// import {
//   setKey,
//   setDefaults,
//   setLanguage,
//   setRegion,
//   fromAddress,
//   fromLatLng,
//   fromPlaceId,
//   setLocationType,
//   geocode,
//   RequestType,
// } from "react-geocode";

// export default function Gmap (info){
//     const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
//   setDefaults({
//     key:  GOOGLE_MAP_API_KEY 
    
//   });

//   const googleMapRef = useRef(null);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     const googleMap = initGoogleMap();
//     setMap(googleMap);
//   }, []);
//   console.log(info);
//  useEffect(() => {
//     if (!map) return;

//     var directionsService = new window.google.maps.DirectionsService();
//     var directionsRenderer = new window.google.maps.DirectionsRenderer();
// if(info) {fromAddress( info.deparPlace)
//   .then(({ results }) => {
//     const { lat, lng } = results[0].geometry.location;
//     console.log(lat, lng);
//     var departure = new window.google.maps.LatLng(lat, lng);
 
  
  
//   fromAddress(info.arrPlace)
//   .then(({ results }) => {
//     const { lat, lng } = results[0].geometry.location;
//     console.log(results);
//     var arriving = new window.google.maps.LatLng(lat, lng);
//     var request = {
//       origin: departure,
//       destination: arriving,
//       travelMode: 'DRIVING'
//     };
//     directionsService.route(request, function (response, status) {
//       if (status == 'OK') {
//         directionsRenderer.setDirections(response);
//         console.log(response);
//         directionsRenderer.setMap(map);
//       }
//     });


//   })
//   .catch(console.error);

  
// })
// .catch(console.error);}
// else {
//   return
// }
    
//  }, [map,info])

  

//   const initGoogleMap = () => {
//     return new window.google.maps.Map(googleMapRef.current, {
//       center: new window.google.maps.LatLng(51.9244, 4.4777),
//       zoom: 10
//     });
//   }

//   return <div id='mapsStyle'
//     ref={googleMapRef}
    
   
//   />



// }