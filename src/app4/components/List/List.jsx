import React, {useState, useEffect, createRef} from "react";
import Loader from "../Loader"
import PlaceDetails from '../PlaceDetails/PlaceDetails' 
import "./List.css"

const List = ({places, childClicked, isLoading, type, setType, rating, setRating}) =>{
    const [elRefs, setElRefs] = useState([])

    useEffect(()=>{
        const refs = Array(places?.length).fill().map((_,i) => elRefs[i] || createRef())
        setElRefs(refs);
    }, [places]);

    return (
        <div className="places-container">
            <h1>Restaurants, Hotels &amp; Attractions around you</h1>
            {isLoading ? (
                <Loader/>
            ) : (
            <>
            <div className="places-forms">
                <form className="place-type">
                    <label htmlFor="Type">Type</label>
                    <select name="Type" value={type} onChange={(e) => setType(e.target.value) }>
                        <option value='restaurants'>Restaurants</option>
                        <option value='hotels'>Hotels</option>
                        <option value='attractions'>Attractions</option>
                    </select>
                </form>
                <form className="place-ranking">
                    <label htmlFor="Rating">Rating</label>
                    <select name="Rating" value={rating} onChange={(e) => setRating(e.target.value) }>
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </form>
            </div>
                <div className="places-grid">
                    {places?.map((place, i)=>(
                        <div className="place-card-container" ref={elRefs[i]} key={i}>
                            <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                        </div>
                    ))}
                </div>
            </>
            )}
        </div>
    )
}

export default List