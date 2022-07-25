import React, {useState} from "react";
import {Searchbar} from './Styles.jsx'
import glass from "../images/glass.png";

export default function SearchBar({onSearch}) {
    let [input, setInput] = useState("")
    
    let handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    let onSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput('')
    }

    return (
        <Searchbar>
            <form onSubmit={(e) => onSubmit(e)}>
                <input className='bar' type="text" value={input} onChange={(e) => handleChange(e)} placeholder='Enter a city name...' />
                
                <button className='submit' type="submit">
                        <img src={glass} alt="glass" />
                </button>
            </form>
        </Searchbar>
    )
}