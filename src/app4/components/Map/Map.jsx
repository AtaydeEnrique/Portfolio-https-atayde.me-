import React, { useState } from 'react';

import GoogleMapReact from 'google-map-react';
import LocationIcon from '../../assets/icons/location.svg'

import Rating from "../../assets/icons/rating.svg"

import "./Map.css"
import mapStyles from "./mapStyles";

const Map = ({coords, setCoords, setBounds, places, setChildClicked}) =>{
    const [collapsed, setCollapsed] = useState(window.innerWidth <= 600)
        window.addEventListener('resize', function(e){
        setCollapsed(window.innerWidth <= 850)
    });

    return (
        <div className='map-container'>
            <GoogleMapReact 
                bootstrapURLKeys={{key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
                defaultCenter={coords}
                center={coords}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
                onChange={(e) => {
                    setCoords({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                  }}
                onChildClick={(child) => setChildClicked(child)}
                >
                    {places?.map((place,i)=>(
                        <div 
                        className="map-marker-container"
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                        >
                            {
                                collapsed ? (
                                    <img className='map-location-icon' src={LocationIcon} alt="location icon"/>
                                ) : (
                                    <div className='map-paper'>
                                        <h5>
                                            {place.name}
                                        </h5>
                                        <img
                                            className="map-paper-img"
                                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} 
                                            alt={place.name}
                                        />
                                        <div className='map-paper-stars'>
                                         {[...Array(Math.floor(place?.rating ? place?.rating : 1))]?.map((i)=>(
                                            <img className="map-paper-star" src={Rating} key={i} alt="Star"/>
                                         ))}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map