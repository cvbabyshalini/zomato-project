import React from 'react'
import Slider from 'react-slick';
import NutritionCarouselCard from './NutritionCarouselCard'
import { NextArrow,PrevArrow } from '../CarouselArrow';
const NutritionCarousel = () => {
    const categories = [
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "biryani",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
            title: "Kesari Bath",
        },
        {
            image: "https://b.zmtcdn.com/data/homepage_dish_data/4/51ddb8a2227b36f36b74c4ea3c26823a.png",
            title: "Parota",
        },
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/4/4a04890400b5d7bac101baace5d7e994.png",
            title: "Sandwich",
        },
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/2/a088e152c3e73c663158206c5e622981.png",
            title: "Coffee",
        },
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "biryani",
        },
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    return (
        <>
            <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
            {
                categories.map((food) => (
                    <NutritionCarouselCard {...food} />
                ))
            }
        </div>

        <div className="hidden lg:block lg:px-20">
            <Slider {...settings}>
                {categories.map((food) => (
                    <NutritionCarouselCard {...food} />
                ))}
            </Slider>
        </div>
        </>
    )
}

export default NutritionCarousel
