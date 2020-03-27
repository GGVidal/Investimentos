import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ChartPage from "./components/ChartPage/ChartPage";
import Header from "./components/Header/Header";
import InformationPage from "./components/InformationPage/InformationPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={InformationPage} />
          <Route path="/chart" component={ChartPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
