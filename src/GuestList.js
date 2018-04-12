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
      handleConfirmation={() => props.toggleConfirmationAt(index)} //CLOSURE: A COMBO OF A FUNCTION AND THE SCOPE VARIABLES IT WAS DECLARED WITH // this function will call toggleConfirmationAt and pass index value with it, so it's available HIGHER in the dom
    />
      )}
  </ul>;


GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
};

export default GuestList;