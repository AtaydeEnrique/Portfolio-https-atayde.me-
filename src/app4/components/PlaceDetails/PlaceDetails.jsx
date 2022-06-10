import React from "react";
import LocationIcon from "../../assets/icons/location.svg"
import PhoneIcon from "../../assets/icons/phone.svg"
import Rating from "../../assets/icons/rating.svg"

import "./PlaceDetails.css"

const PlaceDetails = ({place, selected, refProp}) =>{
    if (selected) {
        refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    };
    
    return (
        <div className="place-card">
            <img
                className="place-image"
                src = {place?.photo ? place?.photo?.images?.large?.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg' }
                alt={place.name}
            />
            <div className="place-card-content">
                <h2>{place.name}</h2>
                <div className="place-card-item">
                    <div className="place-card-rating">
                    <p>{place.rating}</p>
                    {[...Array(Math.floor(place?.rating ? place?.rating : 1))]?.map((i)=>(
                        <img className="place-card-star" src={Rating} key={i} alt="Star"/>
                    ))}
                    </div>
                    <p className="place-card-legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</p>
                </div>
                <div className="place-card-item">
                    <p className="place-card-subtitle1">Price</p>
                    <p className="place-card-subtitle-gut">{place.price_level}</p>
                </div>
                <div className="place-card-item">
                    <p className="place-card-subtitle1">Ranking</p>
                    <p className="place-card-subtitle1-gut">{place.ranking}</p>
                </div>
                {place?.awards?.map((award,i) => (
                    <div className="place-card-award">
                        <img src={award.images.small} key={i} alt='Award'/>
                        <p className="place-card-subtitle2">{award.display_name}</p>
                    </div>
                ))}
                <div className="place-card-chip-grid">
                {place?.cuisine?.map(({ name }) => (
                    <span key={name} size="small" className="place-card-chip">{name}</span>
                ))}
                </div>
                {place?.address && (
                        <p className="place-card-address">
                            <img className="place-location-icon" src={LocationIcon} alt="Location"/> {place.address}
                        </p>
                )}
                {place?.address && (
                        <p className="place-card-address">
                            <img className="place-phone-icon" src={PhoneIcon} alt="Phone"/> {place.phone}
                        </p>
                )}
                <div className="place-card-links">
                    <a href={place.web_url} target="_blank" rel="noreferrer">
                        Trip Advisor
                    </a>
                    <a href={place.website} target="_blank" rel="noreferrer">
                        Website
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PlaceDetails