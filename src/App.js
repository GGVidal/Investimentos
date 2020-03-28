import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import ChartPage from "./components/ChartPage/ChartPage";
import Header from "./components/Header/Header";
import InformationPage from "./components/InformationPage/InformationPage";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Provider template={AlertTemplate} {...options}>
        <Switch>
          <Route path="/" exact={true} component={InformationPage} />
          <Route path="/chart" component={ChartPage} />
        </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
