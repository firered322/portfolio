import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./landing";
import Aboutme from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={Aboutme} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Routes;
