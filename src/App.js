import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./comopents/auth/SignIn";
import SignUp from "./comopents/auth/SignUp";
import Dashboard from "./comopents/dashboard/Dashboard";
import Navbar from "./comopents/layout/Navbar";
import CreateProject from "./comopents/projects/CreateProject";
import ProjectDetail from "./comopents/projects/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetail} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
