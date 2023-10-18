import React, { useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "./map.css";
import "leaflet/dist/leaflet.css";
import { Icon, L } from "leaflet";
import { geocodeService } from 'esri-leaflet';

const Map = () => {
    const [location, setLocation] = useState([51.505, -0.09]);
    const [searchLocation, setLocationValue] = useState('');

    const customIcon = new Icon({
        iconUrl : require("../../../assets/location-pin.png"),
        iconSize : [38, 38]
    })

//     useEffect(() => {
//     const handleSearch = () => {
//       const geocodeService = L.esri.Geocoding.geocodeService();
      
//       geocodeService.geocode().text(searchValue).run(function (error, results) {
//         if (!error && results.results.length > 0) {
//           const { lat, lng } = results.results[0].latlng;
//           setLocation([lat, lng]);
//         }
//       });
//     };
//   }, []);

const handleSearch = () => {
    const geocodeService = L.esri.Geocoding.geocodeService();
      
    geocodeService.text(searchLocation).run(function (error, results) {
        if (!error && results.results.length > 0) {
            const { lat, lng } = results.results[0].latlng;
            setLocation([lat, lng]);
        }
    });
};

    return (
    <div style={{maxWidth: '100%' }}>
        <div className="location-search">
            <h1>Search Location</h1>
            <input type="text" value={searchLocation} onChange={(e) => setLocationValue(e.target.value)} placeholder="Search Location" />
            <button type="submit">Search</button>
        </div>
      <MapContainer center={location} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.505, -0.09]} icon={customIcon}>
                    <Popup>
                        A pretty popup {location} <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    </div>
  );
}

export default Map;