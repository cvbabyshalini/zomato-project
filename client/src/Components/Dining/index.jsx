import React from 'react'

//components
import DiningCarousel from './DiningCarousel';

const Dining = () => {
    return (
        <div>
            <DiningCarousel/>
            <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold lg:text-gray-800 lg:px-24">Dine-Out Restaurants in Vijay Nagar</h1>
        </div>
    )
}

export default Dining;
