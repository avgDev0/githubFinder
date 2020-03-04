import React from 'react';
import PropTypes from 'prop-types';

export const UserItem = ({ user: { login, avatarSrc, goToLink } }) => {
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
        <a href={goToLink} className='btn btn-dark btn-sm my-1'>
          More...
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    login: PropTypes.string.isRequired,
    avatarSrc: PropTypes.string.isRequired,
    goToLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserItem;
