import React from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import styles from './styles';
import Spinner from '../layout/Spinner';

export const Users = ({ users, loading }) =>
  loading ? (
    <Spinner />
  ) : (
    <div style={styles.users.grid}>
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
