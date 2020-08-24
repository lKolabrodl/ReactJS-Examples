import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainPage from "../../page/main";
import CardUser from "../../page/cardUser";
import Header from "../header";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/user/:id" component={CardUser} />
      </Switch>
    </Router>
  );
};

export default App;
