import { Route, Redirect } from "react-router-dom";
// HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

import Temp from "./Components/temp";

//pages
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";
import Reviews from "./Pages/Restaurant/Reviews";


function App() {
  return (
    <>
    <Route path="/" exact>
        <Redirect to="/delivery" />
    </Route>
    <Route path="/restaurant/:id" exact>
        <Redirect to="/restaurant/:id/overview" />
    </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/overview" 
        exact 
        component={Overview}
      />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/order-online" 
        exact 
        component={OrderOnline}
      />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/reviews" 
        exact 
        component={Reviews}
      />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/menu" 
        exact 
        component={Temp}
      />
      <RestaurantLayoutHOC 
        path="/restaurant/:id/photos" 
        exact 
        component={Temp}
      />
    </>
  );
}

export default App;
