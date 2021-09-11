import React from 'react'

//components
import NutritionCarousel from './NutritionCarousel'
import NutritionHeroCarousel from './NutritionHeroCarousel'
const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel/>
            <NutritionCarousel/>
        </div>
    )
}

export default Nutrition;

