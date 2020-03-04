import React from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import { fetchUsers } from './utils/helpers';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  searchUser = async user => {
    this.setState({ loading: true });
    const users = await fetchUsers(user);
    this.setState({ users, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <>
        <NavigationBar />
        <div className='container'>
          <Search
            onSubmit={this.searchUser}
            clearUsers={this.clearUsers}
            showClear={users.length > 0}
          />
          <Users users={users} loading={loading} />
        </div>
      </>
    );
  }
}

export default App;
