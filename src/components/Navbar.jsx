import React from "react";
import SearchBar from "./SearchBar";
import { NavBar } from "./Styles";


export default function Navbar({onSearch}){

    return(
        <NavBar>
            <h3 className="title">Look at the weather of your favorite cities</h3>
            <SearchBar onSearch={onSearch}/>
        </NavBar>
        
    )
}