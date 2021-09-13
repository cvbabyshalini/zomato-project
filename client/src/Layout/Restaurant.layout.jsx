import React from 'react'
import { TiStarOutline } from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri"
import { BiBookmarkPlus } from "react-icons/bi"

// components
import RestaurantNavbar from '../Components/Navbar/restaurantNavbar'
import ImageGrid from '../Components/Restaurant/ImageGrid'
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo'
import InfoButtons from '../Components/Restaurant/InfoButtons'
import TabContainer from '../Components/Restaurant/Tabs'

const RestaurantLayout = (props) => {
    return (
        <>
            {" "}
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-40">
                <ImageGrid images={["https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*", "https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"]} />
            <RestaurantInfo
                name="Mumbai Express"
                restaurantRating="3.5"
                deliveryRating="3.2"
                cuisine="North Indian, Fast Food, Chinese, Street Food"
                address="Basavanagudi, Bengalore"
            />
            <div className="my-4 flex flex-wrap gap-3">
                <InfoButtons isActive>
                    <TiStarOutline /> Add Review
                </InfoButtons>
                <InfoButtons >
                    <RiDirectionLine /> Direction
                </InfoButtons>
                <InfoButtons >
                    <BiBookmarkPlus /> Bookmark
                </InfoButtons>
                <InfoButtons >
                    <RiShareForwardLine /> Share
                </InfoButtons>
            </div>
            <div className="my-10">
            <TabContainer></TabContainer>

            </div>
            {props.children}
            </div>
        </>
    );
}
export default RestaurantLayout
