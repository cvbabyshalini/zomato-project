import React, {useState} from 'react'
import Slider from 'react-slick';

//components
import NutritionHeroCarouselCard from './NutritionHeroCarouselCard';
import { NextArrow, PrevArrow } from '../CarouselArrow';
const NutritionHeroCarousel = () => {
    const [heroBanners, setHeroBanners] = useState(["https://b.zmtcdn.com/data/pictures/chains/0/57750/af716e27297d894b24cd80d2e00547f6_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*","https://b.zmtcdn.com/data/pictures/chains/0/57750/af716e27297d894b24cd80d2e00547f6_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*","https://b.zmtcdn.com/data/pictures/chains/0/57750/af716e27297d894b24cd80d2e00547f6_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*","https://b.zmtcdn.com/data/pictures/chains/0/57750/af716e27297d894b24cd80d2e00547f6_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
      };
    return (
        <div className="lg:px-20 lg:mr-32">
            <Slider {...settings}>
            {heroBanners.map((image) => (
                <NutritionHeroCarouselCard image={image}/>
            ))}
        </Slider>
        </div>
    )
}

export default NutritionHeroCarousel;