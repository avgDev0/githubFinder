import React, { Fragment } from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { fetchUsers } from './utils/helpers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alertConfig: null,
  };

  searchUser = async user => {
    this.setState({ loading: true });
    const users = await fetchUsers(user);
    this.setState({ users, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlertConfig = (msg, type) => {
    this.setState({ alertConfig: { msg, type } });

    setTimeout(() => this.setState({ alertConfig: null }), 3000);
  };

  render() {
    const { users, loading, alertConfig } = this.state;

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
                      onSubmit={this.searchUser}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0}
                      setAlert={this.setAlertConfig}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
