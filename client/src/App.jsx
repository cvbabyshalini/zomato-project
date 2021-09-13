import { Route, Redirect } from "react-router-dom";
// HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

import Temp from "./Components/temp";

//pages
import Home from "./Pages/Home";

function App() {
  return (
    <>
    <Route path="/" exact>
        <Redirect to="/delivery" />
    </Route>
      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Temp}/>
    </>
  );
}

export default App;
