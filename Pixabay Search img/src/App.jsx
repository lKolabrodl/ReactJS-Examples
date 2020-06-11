import React from "react";
import NavBar from "./components/navbar";
import { MuiThemeProvider } from "material-ui/styles";
import Search from "./components/search";

const App = () => {
  return (
    <MuiThemeProvider>
      <>
        <NavBar />
        <Search />
      </>
    </MuiThemeProvider>
  );
};

export default App;
