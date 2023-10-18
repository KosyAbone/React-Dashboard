import React, {useState} from "react";
import axios from "axios";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const api_key = '10ec237e4e034eda983202746231610';
    const location = 'Toronto';
    return (
        <div>
        <h1>Weather</h1>
        <p>Welcome to the Weather page!</p>
        </div>
    );
}

export default Weather;