import React from 'react'
import { TiStarFullOutline } from "react-icons/ti"

const ReviewCard = () => {
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                src="https://b.zmtcdn.com/data/user_profile_pictures/889/daa9f76f7910fc6036d7dfec93023889.jpg"
                                alt="avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Shalini</h3>
                            <small className="text-gray-500">5 Reviews &#8226; 3 followes</small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg">Follow</button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex itmes-center gap-1">
                            3<TiStarFullOutline />
                        </span>
                        <h5 className="font-regula uppercase">Delivery</h5>
                        <small className="text-gray-500">3 days ago</small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                            Actually The quantity and quality of the food is awesome..
                            I strongly recommend. but mynous bit smells like raw egg. otherwise it's a perfect bbq.
                            Thanks zomato
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCard
