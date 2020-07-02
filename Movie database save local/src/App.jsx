import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalProvider } from "./components/context/GlobalState";

import Header from "./components/Header/Header";
import Add from "./components/Add/Add";
import WatchList from "./components/WatchList/WatchList";
import Watched from "./components/Watched/Watched";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WatchList} />
          <Route path="/watched" component={Watched} />
          <Route path="/add" component={Add} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
