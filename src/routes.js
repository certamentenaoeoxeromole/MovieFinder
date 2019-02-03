import React from "react";
import { Switch, Route } from "react-router-dom";

import { MoviesList, Single } from "~/views/index";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MoviesList} />
    <Route path="/single/:id" component={Single} />
  </Switch>
);

export default Routes;
