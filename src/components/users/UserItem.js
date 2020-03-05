import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const UserItem = ({ user: { login, avatarSrc } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatarSrc}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More...
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
