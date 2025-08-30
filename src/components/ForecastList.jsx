import React from 'react';
import { dateToDayName, filterForecastData } from '../utils/dateUtils';


const ForecastList = ({ derece }) => {
    return (
        <div className='forecasts'>
            {derece &&

                filterForecastData(derece).map((list, i) => {
                    const [, time] = list.dt_txt.split(" ");
                    return (
                        <div key={i} className='gun'>
                            <img
                                src={`https://openweathermap.org/img/wn/${list.weather[0].icon}@2x.png`}
                                alt=""
                            />
                            <p className='forecastlist-temp'>{(list.main.temp).toFixed(0)}°C</p>
                            <p className='forecastlist-daytime'>{dateToDayName(list.dt_txt)}</p>
                            <p className='forecastlist-daytime'>{time.slice(0, 5)}</p>
                        </div>
                    );
                })}
        </div>
    );
};


export default ForecastList;