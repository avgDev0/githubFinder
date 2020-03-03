import React from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    let users = [];
    const { data } = await axios.get('https://api.github.com/users');

    if (data.length) {
      users = data.map(user => ({
        id: user.id,
        login: user.login,
        avatarSrc: user.avatar_url,
        goToLink: user.html_url,
      }));
    }

    this.setState({ users, loading: false });
  }

  render() {
    const { users, loading } = this.state;

    return (
      <>
        <NavigationBar />
        <div className='container'>
          <Users users={users} loading={loading} />
        </div>
      </>
    );
  }
}

export default App;
