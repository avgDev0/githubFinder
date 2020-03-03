import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export const NavigationBar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <FontAwesomeIcon icon={faGithubAlt} /> {title}!
      </h1>
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
