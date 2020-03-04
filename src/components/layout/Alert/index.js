import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Alert = ({ config }) => {
  return (
    config !== null && (
      <div className={`alert alert-${config.type}`}>
        <FontAwesomeIcon icon={faInfoCircle} /> {config.msg}
      </div>
    )
  );
};

Alert.propTypes = {
  config: PropTypes.object,
};
export default Alert;
