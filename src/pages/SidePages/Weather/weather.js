import React, {useState, useEffect} from "react";
import axios from "axios";
import "./weather.css";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState('Toronto')

    const apiKey = '10ec237e4e034eda983202746231610';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    //To display the weather data first time
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setWeatherData(response.data);
                setLoading(false);
            }
            catch(error){
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    },[])

    //To fetch and display weather on location change by user
    const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl);
                setWeatherData(response.data);
                setLoading(false);
            }
            catch(error){
                setError(error);
                setLoading(false);
            }
        };

    return (
        <div className="container">
        <h1>Current Weather</h1>
        <div className="search-weather">
            <label>
                Enter the location to check weather
            </label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location"/>
            <button type="submit" onClick={fetchData}>Fetch Weather</button>
        </div>
        {loading ? (
            <p>Loading...</p>
        ): error ? (
            <p>Error : {error.message}</p>
        ): (
            <div className="weather-card">
                <strong>Location : {weatherData.location.name}, {weatherData.location.country}</strong>
                <p>Temperature : {weatherData.current.temp_c}°C</p>
                <p>Weather: {weatherData.current.condition.text}</p>
                <p>Humidity: {weatherData.current.humidity}%</p>
            </div>
        )}
        </div>
    );
}

export default Weather;