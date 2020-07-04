import React, { Fragment } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
