import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Quiz />
        </Layout>
      </div>
    );
  }
}

export default App;
