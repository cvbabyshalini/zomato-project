import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import image from "./Image/image.reducer";
import reviews from "./Reviews/review.reducer"
import user from "./User/user.reducer"
import food from "./Food/food.reducer"
import cart from "./Cart/cart.reducer"

const rootReducer = combineReducers({ restaurant, image, reviews, user, food, cart });

export default rootReducer;