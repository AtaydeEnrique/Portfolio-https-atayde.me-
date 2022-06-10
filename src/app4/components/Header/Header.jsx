import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import SearchIcon from '../../assets/icons/search.svg'

import './Header.css'

const Header = ({setCoords}) =>{
    const [autoComplete, setAutoComplete]= useState(null)

    const onLoad = (autoC) => setAutoComplete(autoC)

    const onPlaceChanged = () =>{
        const lat = autoComplete.getPlace().geometry.location.lat()
        const lng = autoComplete.getPlace().geometry.location.lng()

        setCoords({lat,lng})
    }

    return (
        <nav className="advisor-navbar">
            <div className="advisor-nav-container">
                <div className="advisor-nav-title">
                    <h2>Atayde Advisor</h2>
                </div>
                <div className="advisor-nav-search">
                    <div className="advisor-nav-title">
                        <h2 className="advisor-title2">Explore new Places</h2>
                    </div>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className="advisor-search">
                            <div className="advisor-search-icon">
                                <img src={SearchIcon} alt="search icon"/>
                            </div>
                            <input type="text" placeholder="Search..." />
                        </div>
                    </Autocomplete>
                </div>
            </div>
        </nav>
    )
}

export default Header