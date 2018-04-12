import React from 'react';
import PropTypes from 'prop-types'; //React lib ensures props passed into component are type program expects
import Guest from './Guest';

const GuestList = props =>
  <ul>
    {props.guests.map((guest, index) => /*The map() method creates a new array with the results of calling a provided function on every element in the calling array.*/
    <Guest
      key={index}
      name={guest.name}
      isConfirmed={guest.isConfirmed}
      isEditing={guest.isEditing}
      handleConfirmation={() => props.toggleConfirmationAt(index)} //closure
      handleToggleEditing={() => props.toggleEditingAt(index)}
      setName={text => props.setNameAt(text, index)}
    />
      )}
  </ul>;


GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
};

export default GuestList;