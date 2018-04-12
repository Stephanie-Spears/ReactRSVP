import React from 'react';
import PropTypes from 'prop-types';

const Guest = props =>
  <li>
    <span>{props.name}</span>
    <label>
      <input type="checkbox"
             checked={props.isConfirmed}
             onChange={props.handleConfirmation} //when change event occurs, this function will receive an event object-->then in GuestList.js, the function 'handleConfirmation' will receive that object
      /> Confirmed
    </label>
    <button>edit</button>
    <button>remove</button>
  </li>;


Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
};

export default Guest;