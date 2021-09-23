import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux"

//components
import DeliveryCarousel from './DeliveryCarousel'
import Brand from './Brand'
import RestaurantCard from '../RestaurantCard'
const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.restaurants
    );
    
    useEffect(() => {
        reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    }, [reduxState.restaurants]);
    
    return (
        <>
            <DeliveryCarousel />
            {/*<Brand/> */}
            <div className="lg:px-16 lg:mr-32 flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}
export default Delivery;
