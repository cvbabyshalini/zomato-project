import React, { useState } from 'react'

//components
import DeliveryCarousel from './DeliveryCarousel'
import Brand from './Brand'
import RestaurantCard from '../restaurantCard'
const Delivery = () => {
    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Chai Point",
            cuisine: ["Street Food", "Beverages", "Tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Chai Point",
            cuisine: ["Street Food", "Beverages", "Tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/0/52860/28d7492be8697704615ddad4d285f89b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            ],
            name: "Chai Point",
            cuisine: ["Street Food", "Beverages", "Tea"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfdelivery: 47,
            restaurantReviewValue: 4.1,
        }
    ]);
    return (
        <>
            <DeliveryCarousel />
            {/*<Brand/> */}
            <div className="lg:px-20 flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    )
}
export default Delivery;
