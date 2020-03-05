import React, { Fragment } from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { fetchUsers, fetchUserInformation } from './utils/helpers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

class App extends React.Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alertConfig: null,
  };

  searchUsers = async user => {
    this.setState({ loading: true });
    const users = await fetchUsers(user);
    this.setState({ users, loading: false });
  };

  getUser = async username => {
    this.setState({ loading: true });
    const user = await fetchUserInformation(username);
    this.setState({ user, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlertConfig = (msg, type) => {
    this.setState({ alertConfig: { msg, type } });

    setTimeout(() => this.setState({ alertConfig: null }), 3000);
  };

  render() {
    const { users, user, loading, alertConfig } = this.state;

    return (
      <Router>
        <div className='App'>
          <NavigationBar />
          <div className='container'>
            <Alert config={alertConfig} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <Fragment>
                    <Search
                      onSubmit={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.setAlertConfig}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={props => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
