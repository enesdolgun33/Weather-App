import React from 'react';


const CurrentWeather = ({ derece }) => {
    return (
        <div className='city-weather'>
            {derece && (
                <>
                    {(() => {
                        const { temp, feels_like, humidity } = derece.list[0].main;
                        const { speed } = derece.list[0].wind;
                        return (
                            <>
                                <p className='temp'>{temp.toFixed(0)}°C</p>
                                <div className='additional-info'>
                                    <p className='hissedilen'>Hissedilen: {feels_like.toFixed(0)}°C</p>
                                    <p>Nem: {humidity}%</p>
                                    <p>Rüzgar: {speed.toFixed(1)} km/s</p>
                                </div>
                            </>
                        );
                    })()}
                </>
            )}
        </div>
    );
};


export default CurrentWeather;