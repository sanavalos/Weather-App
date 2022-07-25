import React from "react";
import { SingleCard } from "./Styles";

export default function Card ({name, main, wind, humidity, icon, max, min, onFilter}) {


    return(
        <SingleCard>
            <div className="button">
                    <button onClick={(e) => onFilter(name)}>X</button>
            </div>
            <div className="cityName">
                <h2>{name}</h2>
            </div>
            <div className="details">
                <p>{main} - Wind: {wind} km/h - Humidity: {humidity}%</p>
            </div>
            <div className="bottomBox">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" className="image" />
                <div className="temps">
                    <div className="tempMax"><p>Max: {max} °C</p></div>                        
                    <div className="tempMin"><p>Min: {min} °C</p></div>                        
                </div>
            </div>
        </SingleCard>
    )
}
