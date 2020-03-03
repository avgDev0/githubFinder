import React, { Component } from 'react';
import UserItem from './UserItem';
import styles from './styles';

export class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatarSrc: 'https://avatars0.githubusercontent.com/u/1?v=4',
        goToLink: 'https://github.com/mojombo',
      },
      {
        id: 2,
        login: 'defunkt',
        avatarSrc: 'https://avatars0.githubusercontent.com/u/2?v=4',
        goToLink: 'https://github.com/defunkt',
      },
      {
        id: 3,
        login: 'pjhyett',
        avatarSrc: 'https://avatars0.githubusercontent.com/u/3?v=4',
        goToLink: 'https://github.com/pjhyett',
      },
    ],
  };

  render() {
    return (
      <div style={styles.users.grid}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
