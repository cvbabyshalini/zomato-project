import React from 'react'

//components
import NightLifeCarousel from './NightLifeCarousel';

const NightLife = () => {
    return (
        <div>
            <NightLifeCarousel/>
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:text-gray-800 lg:px-24">Nightlife Restaurants in Vijay Nagar</h1>
        </div>
    )
}

export default NightLife;
