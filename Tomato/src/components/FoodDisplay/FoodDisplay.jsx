import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => { // Accept category as a prop
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list
                    .filter(item => category === "All" || category === item.category) // Filter based on category
                    .map((item, index) => (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default FoodDisplay;