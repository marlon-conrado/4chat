import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Chat from "./page/Chat/Chat";
import Register from "./page/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Chat} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
