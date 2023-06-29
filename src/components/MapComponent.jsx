import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
export default function MapComponent(props) {
    const mapStyles = {        
        height: "100vh",
        width: "100%"
    };
      
    const defaultCenter = {
    lat: 41.3851, lng: 2.1734
    }
    return(
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter} 
         >
            <Marker key="" position={defaultCenter}/>
         </GoogleMap>
    ); 
    
}