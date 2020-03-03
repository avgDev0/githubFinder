import React from 'react';
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import UserItem from './components/users/UserItem';
import userStyles from './components/users/styles';
import axios from 'axios';

class App extends React.Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    await axios.get('https://api.github.com/users').then(response => {
      let users = [];
      const { data } = response;
      if (data.length) {
        users = data.map(u => ({
          id: u.id,
          login: u.login,
          avatarSrc: u.avatar_url,
          goToLink: u.html_url,
        }));
      }

      this.setState({ users });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <>
        <NavigationBar />
        <div className='container' style={userStyles.users.grid}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      </>
    );
  }
}

export default App;
