import React from "react";
import Card from "./Card.jsx";
import { MultipleCards } from "./Styles.jsx";

export default function Cards({cities, onFilter}){
    
    return(
    <MultipleCards>
        {cities.map(c => <Card 
                            key={c.id}
                            name={c.name} 
                            main={c.weather[0].main}
                            wind = {c.wind.speed}
                            humidity = {c.main.humidity}
                            icon = {c.weather[0].icon}
                            max = {c.main.temp_max}
                            min = {c.main.temp_min}
                            onFilter = {onFilter}
                        />)
        }
    </MultipleCards>
    )
}