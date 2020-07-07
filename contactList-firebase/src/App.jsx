import React from "react";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-1">
        <Contacts />
      </div>
    </div>
  );
};

export default App;
