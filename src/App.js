import React, { Fragment, useState } from "react";
import "./App.css";
import NavigationBar from "./components/layout/NavigationBar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import {
  fetchUsers,
  fetchUserInformation,
  fetchUserRepos,
} from "./utils/helpers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alertConfig, setAlertConfig] = useState(null);

  const searchUsers = async (user) => {
    setLoading(true);

    const users = await fetchUsers(user);

    setUsers(users);
    setLoading(false);
  };

  const getUser = async (username) => {
    setLoading(true);

    const user = await fetchUserInformation(username);

    setUser(user);
    setLoading(false);
  };

  const getUserRepos = async (username) => {
    setLoading(true);

    const repos = await fetchUserRepos(username);

    setRepos(repos);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

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
                    <Search
                      onSubmit={searchUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0}
                      setAlert={setAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
