import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Stocks from "./containers/Stocks";
import Settings from "./containers/Settings";
import Profile from "./containers/Profile";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <UnauthenticatedRoute exact path="/login">
          <Login />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/signup">
          <Signup />
        </UnauthenticatedRoute>
        <AuthenticatedRoute exact path="/settings">
          <Settings />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/username">
          <Profile />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/notes/new">
          <NewNote />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/notes/:id">
          <Notes />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/stocks/:id">
          <Stocks />
        </AuthenticatedRoute>
        <Route>
          <NotFound />
        </Route>
    </Switch>
  );
}