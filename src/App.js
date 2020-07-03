import React, { Fragment, useState } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alertConfig, setAlertConfig] = useState(null);

  const setAlert = (msg, type) => {
    setAlertConfig({ msg, type });

    setTimeout(() => setAlertConfig(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <NavigationBar />
          <div className="container">
            <Alert config={alertConfig} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search setAlert={setAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
