import React, {useEffect, useState} from "react";
import { getPlacesData } from "./api";
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

import "./App.css"

const App = () =>{
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] =useState([])

    const [childClicked, setChildClicked] = useState(null)

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        });

      }, []);

    useEffect(() => {
        const filteredPlaces = places.filter((place)=> place.rating > rating )
        
        setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        setIsLoading(true)
        window.scrollTo(0, 0)
        const delayDebounceFn = setTimeout(() => {
            if (bounds.sw && bounds.ne){
                getPlacesData(type, bounds.sw, bounds.ne)
                    .then((data) => {
                        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0))
                        setIsLoading(false)
                });
            }
          }, 2000)
      
        
        return () => clearTimeout(delayDebounceFn)

    }, [bounds, type])
    
    return(
        <div className="atayde-avisor-container">
            <Header setCoords={setCoords}/>
            <div className="advisor-grid">
                <div className="advisor-grid-item">
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </div>
                <div className="advisor-grid-item">
                    <Map 
                    setBounds={setBounds}
                    setCoords={setCoords}
                    coords={coords}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    setChildClicked={setChildClicked} 
                    />
                </div>
            </div>
        </div>
    );
}

export default App