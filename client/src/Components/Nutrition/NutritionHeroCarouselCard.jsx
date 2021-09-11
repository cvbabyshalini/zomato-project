import React from 'react'

const NutritionHeroCarouselCard = (props) => {
    return (
        <div className="w-full h-72">
            <img 
                src={props.image}
                alt="medicine" 
                className="w-full h-full rounded-xl"
            />
        </div>
    )
}

export default NutritionHeroCarouselCard;
