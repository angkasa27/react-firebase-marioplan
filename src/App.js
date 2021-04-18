import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./comopents/dashboard/Dashboard";
import Navbar from "./comopents/layout/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
