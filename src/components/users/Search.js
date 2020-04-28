import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ showClear, clearUsers, onSubmit, setAlert }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmitHandler = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something, mate!', 'ligth');
    } else {
      onSubmit(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
        {showClear && (
          <button className='btn btn-clear btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    </div>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
