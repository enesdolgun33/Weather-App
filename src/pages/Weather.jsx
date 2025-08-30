import React, { useState } from 'react';
import '../css/Weather.css';
import { sehirler } from '../data/Cities';
import { getCoordinates, getWeather } from '../services/weatherService';
import { dateToDayName, filterForecastData } from '../utils/dateUtils';


import SearchBox from '../components/SearchBox';
import CurrentWeather from '../components/CurrentWeather';
import ForecastList from '../components/ForecastList';


function Weather() {
    const [selectedCity, setSelectedCity] = useState(null);
    const [weatherData, setWeatherData] = useState();


    const icons = (x) => weatherData?.list[x]?.weather[0]?.icon;


    const konum = async (sehir) => {
        try {
            const { lat, lon } = await getCoordinates(sehir);
            console.log("Koordinatlar :", lat, " , ", lon);


            const weatherData = await getWeather(lat, lon);
            console.log(weatherData);
            setWeatherData(weatherData);
        } catch (error) {
            console.error("Hata oluştu", error);
        }
    };


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

                    {/* Şehir Seçimi */}
                    <SearchBox
                        value={selectedCity}
                        options={sehirler}
                        onChange={(event, newValue) => {
                            setSelectedCity(newValue);
                            konum(newValue);
                            console.log("Secili sehir :" + newValue);
                        }}
                    />


                    {/* Anlık hava durumu */}
                    <CurrentWeather derece={weatherData} />


                    {/* 5 günlük tahmin */}
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