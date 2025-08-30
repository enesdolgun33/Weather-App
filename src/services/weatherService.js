import axios from 'axios';
import { WEATHER_BASE_URL, LOCATION_BASE_URL, API_KEY } from '../config/config';


export const getCoordinates = async (sehir) => {
    const { data } = await axios.get(
        `${LOCATION_BASE_URL}?q=${sehir}&country=TR&appid=${API_KEY}`
    );
    return { lat: data[0].lat, lon: data[0].lon };
};


export const getWeather = async (lat, lon) => {
    const { data } = await axios.get(
        `${WEATHER_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=tr`
    );
    return data;
};