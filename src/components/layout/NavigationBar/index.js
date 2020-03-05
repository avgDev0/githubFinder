import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export const NavigationBar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={faGithubAlt} /> {title}!
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

NavigationBar.defaultProps = {
  title: 'Welcome',
  icon: { faGithubAlt },
};

export default NavigationBar;
