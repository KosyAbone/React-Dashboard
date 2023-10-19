import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./map.css";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const Map = () => {
    const [latitude, setLatitude] = useState(67.59);
    const [longitude, setLongitude] = useState(58.67);
    const [location, setLocation] = useState([latitude, longitude]);
    const [mapKey, setMapKey] = useState("mapKey");

    const customIcon = new Icon({
        iconUrl : require("../../../assets/location-pin.png"),
        iconSize : [38, 38]
    })

    useEffect(() => {
        // Update the map center when the location changes
        setLocation([latitude, longitude]);
    }, [latitude, longitude]);


    const handleSearch = () => {
        setLocation([latitude, longitude]);
        setMapKey(Date.now().toString());
    };

    return (
    <div style={{maxWidth: '100%' }}>
        <div className="location-search">
            <h1>Search Location</h1>
            <label className="location-input">
                Latitude
                <input type="number" value={latitude} onChange={(e) => setLatitude(parseFloat(e.target.value))} placeholder="Enter Latitude" />
            </label>
            <label className="location-input">
                Longitude
                <input type="number" value={longitude} onChange={(e) => setLongitude(parseFloat(e.target.value))} placeholder="Enter Longitude" />
            </label>
            <button className="search-button" type="submit" onClick={handleSearch}>Search</button>
        </div>
        <div className="location-print">
            {location ? (
                <h2>Location: {location[0]}, {location[1]}</h2>
            ) : (
                <h2>Enter the Latitude and Longitude Please</h2>
            )}
        </div>
      <MapContainer key={mapKey} center={location} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[latitude, longitude]} icon={customIcon}>
                    <Popup>
                        A pretty popup {location} <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    </div>
  );
}

export default Map;