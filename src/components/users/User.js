import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const { user, loading } = this.props;
    return loading ? <Spinner /> : <div>{user.login}</div>;
  }
}

User.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  getUser: PropTypes.func.isRequired,
};
