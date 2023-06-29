import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';
export default function MapComponent(props) {
  const countryInfo = useSelector((state) => state.placeMap.selectedCountry);
  const mapStyles = {        
      height: "100vh",
      width: "100%"
  };
    
  const defaultCenter = {
    lat: countryInfo.latitude?countryInfo.latitude:41.3851,
    lng: countryInfo.longitude?countryInfo.longitude: 2.1734
  }
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: defaultCenter,
      map,
      title: 'Hello World!'
    });
    return marker;
   };
  return(
    //Map component to mark the selected country
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={4}
          center={defaultCenter}
        >
          <Marker key={countryInfo.code} position={defaultCenter}/>         
        </GoogleMap>
  ); 
    
}