
import { useState } from 'react';
import RestaurantInfo from './RestaurantInfo';

function EditableRestaurant({ fields }) {
    const [restaurant, setRestaurant] = useState(fields);
    const [isEditing, setIsEditing] = useState(false);

    if (!fields)
        return <b>Error</b>;
    if (!('name' in fields && 'address' in fields && 'rating' in fields && 'cuisine' in fields))
        return <b>Error</b>;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <div className="editable-restaurant">
            {
                isEditing ? (
                    <form className="restaurant-form" onSubmit={(e) => { e.preventDefault(); toggleEdit(); }}>
                        <input name="name" value={restaurant.name} onChange={handleChange} />
                        <input name="address" value={restaurant.address} onChange={handleChange} />
                        <input name="rating" type="number" step="0.1" value={restaurant.rating} onChange={handleChange} />
                        <input name="cuisine" value={restaurant.cuisine} onChange={handleChange} />
                        <button type="submit">Зберегти</button>
                    </form>
                ) : (
                    <>
                        <RestaurantInfo fields={restaurant}/>
                        <button onClick={toggleEdit}>Редагувати</button>
                    </>
                )
            }
        </div>
    );
}

export default EditableRestaurant;