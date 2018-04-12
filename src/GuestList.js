import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
  <ul>
    {props.guests.map((guest, index) => /*The map() method creates a new array with the results of calling a provided function on every element in the calling array.*/
    <Guest key={index} name={guest.name} isConfirmed={guest.isConfirmed} />
      )}
  </ul>;


GuestList.propTypes = {
  guests: PropTypes.array.isRequired
};

export default GuestList;