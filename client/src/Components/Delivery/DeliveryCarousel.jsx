import React from 'react'
import Slider from "react-slick"

// components
import DeliveryCategory from './DeliveryCategory';

const DeliveryCarousel = () => {
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
            image: "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
            title: "Kesari Bath",
        },
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "biryani",
        },
        {
            image:
                "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            title: "biryani",
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
        slidesToScroll: 1
      };
    return (
        <>
        <h1 className="text-xl mb-4 font-semibold">
            Inspiration for your first order
        </h1>
        <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
            {
                categories.map((food) => (
                    <DeliveryCategory {...food} />
                ))
            }
        </div>

        <div className="hidden lg:block">
            <Slider {...settings}>
                {categories.map((food) => (
                    <DeliveryCategory {...food} />
                ))}
            </Slider>
        </div>
        </>
    );
};
export default DeliveryCarousel;
