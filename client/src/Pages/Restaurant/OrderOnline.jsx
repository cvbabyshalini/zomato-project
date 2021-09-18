import React from 'react'
import { AiOutlineCompass } from "react-icons/ai"
import { BiTimeFive } from "react-icons/bi"

//components
import FloatMenuBtn from '../../Components/Restaurant/Order-Online/FloatMenuBtn'
import MenuListContainer from '../../Components/Restaurant/Order-Online/MenuListContainer'
import FoodItem from '../../Components/Restaurant/Order-Online/FoodItem'
import FoodList from '../../Components/Restaurant/Order-Online/FoodList'

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:block flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 my-4">
                        <h2 className="text-xl font-semibold">
                            Order Online
                        </h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                        <FoodList 
                            title="Recommended"
                            items={[
                                {
                                    price:"325",
                                    rating:3,
                                    description:"[Served with 1 Gulab Jamun & Mint Raita] In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
                                    title:"Paneer Subz (Classic Paneer and Veg Biryani - Serves 1)",
                                    image:
                                        "https://b.zmtcdn.com/data/dish_photos/51f/c5feab5fcf17681584c66db2f9cda51f.jpg",

                                },
                            ]}
                        />
                        <FoodList 
                            title="Pizza"
                            items={[
                                {
                                    price:"325",
                                    rating:3,
                                    description:"[Served with 1 Gulab Jamun & Mint Raita] In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
                                    title:"Paneer Subz (Classic Paneer and Veg Biryani - Serves 1)",
                                    image:
                                        "https://b.zmtcdn.com/data/dish_photos/51f/c5feab5fcf17681584c66db2f9cda51f.jpg",

                                },
                            ]}
                        />

                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline
