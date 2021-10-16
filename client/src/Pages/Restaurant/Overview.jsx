import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowDropright } from "react-icons/io"
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../../Components/CarouselArrow'
import ReactStars from "react-rating-stars-component"
import { useSelector, useDispatch } from 'react-redux'


//components
import MenuCollection from '../../Components/Restaurant/MenuCollection'
import MenuSimilarRestaurantcard from '../../Components/Restaurant/MenuSimilarRestaurantcard'
import ReviewCard from '../../Components/Restaurant/Reviews/ReviewCard'
import Mapview from '../../Components/Restaurant/Mapview'

import { getImage } from '../../Redux/Reducer/Image/image.action'
import { getReviews } from '../../Redux/Reducer/Reviews/review.action'

const Overview = () => {
    const [menuImages, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviews] = useState([]);
    const { id } = useParams();

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const reduxState = useSelector(
        (globalStore) =>
            globalStore.restaurant.selectedRestaurant.restaurant
    );

    const dispatch = useDispatch();
    useEffect(() => {
        if (reduxState) {
            dispatch(getImage(reduxState?.menuImages)).then((data) => {
                const images = [];
                data.payload.image.images.map(({ location }) => images.push(location));
                setMenuImages(images);
            }
            );
            dispatch(getReviews(reduxState?._id)).then((data) =>
                setReviews(data.payload.reviews)
            );
        }
    }, []);
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLanLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    }
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                    <h2 className="font-semibold text-lg md:text-xl my-4">
                        About this place
                    </h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className="flex items-center gap-1 text-zomato-400">
                                See all menus <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-wrap gap-3 my-4">
                        <MenuCollection
                            menuTitle="Menu"
                            pages="3"
                            image={menuImages}
                        />
                    </div>
                    <h4 className="text-lg font-medium my-4">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                        {reduxState?.cuisine.map((data) => (
                            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                                {data}
                            </span>
                        ))}
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Average Cost</h4>
                        <h6>{reduxState?.averageCost} for one order (approx.)</h6>
                        <small className="text-gray-500">Exclusive of applicable taxes ans charges, if any</small>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Similar Restaurants</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/18872502/4c4e6361ee4c554cd9723fd97b5454da_featured_v2.jpg"
                                title="Sri Chandra Restaurant"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/18872502/4c4e6361ee4c554cd9723fd97b5454da_featured_v2.jpg"
                                title="Sri Chandra Restaurant"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/18872502/4c4e6361ee4c554cd9723fd97b5454da_featured_v2.jpg"
                                title="Sri Chandra Restaurant"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/18872502/4c4e6361ee4c554cd9723fd97b5454da_featured_v2.jpg"
                                title="Sri Chandra Restaurant"
                            />
                            <MenuSimilarRestaurantcard
                                image="https://b.zmtcdn.com/data/pictures/2/18872502/4c4e6361ee4c554cd9723fd97b5454da_featured_v2.jpg"
                                title="Sri Chandra Restaurant"
                            />

                        </Slider>
                    </div>
                    <div className="my-4">
                        <h4 className="text-lg font-medium">Rate your delivery experience</h4>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        {Reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                    </div>
                    <div className="my-4 w-full md:hidden flex flex-col gap-4">
                        <Mapview
                            title={reduxState?.name}
                            phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLanLong(reduxState?.mapLocation)}
                            address={reduxState?.address} />
                    </div>
                    <div className="my-4" flex flex-col gap-4>
                        
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
                >
                    <Mapview
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLanLong(reduxState?.mapLocation)}
                        address={reduxState?.address} />
                </aside>
            </div>
        </>
    )
}

export default Overview
