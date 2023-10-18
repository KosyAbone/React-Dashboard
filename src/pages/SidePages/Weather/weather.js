import React, {useState, useEffect} from "react";
import axios from "axios";
import "./weather.css";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiKey = '10ec237e4e034eda983202746231610';
    const location = 'Toronto';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

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
    },[apiUrl])

    return (
        <div className="container">
        <h1>Current Weather</h1>
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