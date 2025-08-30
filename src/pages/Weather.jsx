import React, { useState } from 'react';
import '../css/Weather.css';
import { cities } from '../data/Cities';
import { getCityWeather, getCoordinates, getWeather } from '../services/weatherService';
import { dateToDayName, filterForecastData } from '../utils/dateUtils';

import SearchBox from '../components/SearchBox';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';


function Weather() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [weatherData, setWeatherData] = useState();

    const icons = (x) => weatherData?.list[x]?.weather[0]?.icon;

    const handleCityChange = async (city) => {
        try {
            const data = await getCityWeather(city);
            setWeatherData(data);
            console.log("Seçili şehir :", city);
        } catch (error) {
            console.error("Hata oluştu", error);
        }
    }

    return (
        <div className='main-div'>
            <div className='box'>
                <div className='info'>
                    <img
                        className="big-img"
                        src={
                            weatherData
                                ? `https://openweathermap.org/img/wn/${icons(0)}@2x.png`
                                : "https://openweathermap.org/img/wn/03n@2x.png"
                        }
                    />
                    <h1>Hava Durumu</h1>

                    <SearchBox
                        value={selectedCity}
                        options={cities}
                        onChange={(event, newValue) => {
                            setSelectedCity(newValue);
                            handleCityChange(newValue);
                        }}
                    />

                    <CurrentWeather derece={weatherData} />

                    <ForecastList
                        derece={weatherData}
                        filtreleVeriler={filterForecastData}
                        tarihToGunAdi={dateToDayName}
                    />
                </div>
            </div>
        </div>
    );
}


export default Weather;