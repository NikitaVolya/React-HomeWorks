
import { useState } from "react";
import "./Restaurant.css";


function RestaurantInfo({ fields }) {

    if (!('name' in fields && 'address' in fields && 'rating' in fields && 'cuisine' in fields))
        return <b>Error</b>;


    return (
        <div className="restaurant-card">
            <h2>{fields?.name}</h2>
            <p><b>Адреса:</b> {fields?.address}</p>
            <p><b>Рейтинг:</b> {fields?.rating}⭐</p>
            <p><b>Кухня:</b> {fields?.cuisine}</p>
        </div>
    );
}


export default RestaurantInfo;