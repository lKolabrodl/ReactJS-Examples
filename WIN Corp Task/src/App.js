import React, { useState, useEffect } from "react";

import fire from "./servies/firebase";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  // проверяем аунтентификацию в firebase
  // отображаем стрницу dashboard или перекидываем на регистрацию / вход
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return (
    <div className="App">{user ? <Dashboard user={user} /> : <Login />}</div>
  );
};

export default App;
