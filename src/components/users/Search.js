import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
  state = {
    text: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something, mate!', 'ligth');
    } else {
      this.props.onSubmit(this.state.text);
      this.setState({ text: '' });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search users...'
            value={this.state.text}
            onChange={this.onChange}
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
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
};

export default Search;
