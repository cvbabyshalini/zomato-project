import React from 'react'
import Slider from "react-slick";
import { NextArrow, PrevArrow } from '../CarouselArrow';

const Brand = () => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/2159c4a55b3ff2362678141e6a83645f_1622476257.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/878a69aaa88728f7073d1e3d13a5a047_1628324346.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/0a8086a96c6bb8c1f3006e3a84488e1f_1605160890.png?output-format=webp",
        "https://b.zmtcdn.com/data/brand_creatives/logos/7cbdbcec54cf7a207bcc565067cf8993_1617875078.png?output-format=webp",
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
      };
    return (
        <>

           <Slider {...settings}>
               {logos.map((logo) => (
                    <div className="w-24 h-24 bg-white shadow">
                    <img 
                        src={logo} 
                        alt="brand" 
                        className="w-full h-full object-cover"
                        />
                </div>
               ))}
           </Slider>
        </>
    )
}

export default Brand;
