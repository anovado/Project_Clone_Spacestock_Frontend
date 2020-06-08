import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Apartment from "../pages/Apartment";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
// import StickyPage from "../components/Coba";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/coba" component={StickyPage} /> */}
          <Route exact path="/apartment/:category" component={Apartment} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
