import React from 'react';
import { useState} from 'react';
import { Clock } from "./Styles";

export default function DigitalClock() {
    const [clock, setClock] = useState(new Date().toLocaleTimeString())

    setInterval(() => {
            setClock(new Date().toLocaleTimeString())
        }, 1000);
    
    return (
        <Clock>
            <div>
                <h2>Your time is:</h2>
                <h4>{clock}</h4>
            </div>
        </Clock>
    )
}

