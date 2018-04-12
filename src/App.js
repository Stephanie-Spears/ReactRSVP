import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import MainContent from './MainContent';


class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  };

  //Handler to confirm or edit guests
  toggleGuestProperty = (property, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id){
          return {
            ...guest,
            [property]: !guest[property] //flip value
          };
        }
        return guest;
      })
    }); //need to pass this method down to Guest component and bind it to the checkboxes change event

  toggleConfirmation = id =>
    this.toggleGuestProperty("isConfirmed", id);

  toggleEditing = id =>
    this.toggleGuestProperty("isEditing", id);

  removeGuest = id =>
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    });

  setName = (name, id) =>
    this.setState({
      guests: this.state.guests.map(guest => {
        if(id === guest.id){
          return {
            ...guest,
            name,
          };
        }
        return guest;
      })
    });


  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered });


  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id,
        },
        ...this.state.guests
      ],
      pendingGuest: '',
    });
  };

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () =>
    this.state.guests.reduce(
      (total, guest) => guest.isConfirmed ? total + 1 : total,
      0
    );


  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">

        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          pendingGuest={this.state.pendingGuest}
          handleNameInput={this.handleNameInput}
        />

        <MainContent
          toggleFilter={this.toggleFilter}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmation={this.toggleConfirmation}
          toggleEditing={this.toggleEditing}
          setName={this.setName}
          removeGuest={this.removeGuest}
          pendingGuest={this.state.pendingGuest}
        />

      </div>
    );
  }
}

export default App;


//STATE: The data an app uses to change what and how it displays
//BEST WAY to store two pieces of state that depend on each other: store only one of them and compute the other from the first as needed
//BEST WAY to share state between components: shared state should be stored in both components' nearest shared ancestor

//TO GET DATA FROM CHILD TO PARENT: You need to define a callback in the parent and pass it down to the child, and bind it to one of the child's events.
//CLOSURE: Functions retain access to the scope in which they were defined.
//KEY PROPERTY: helps identify which items have changed, been added, or removed
//SPREAD(...)OPERATOR: Copy all of an object's properties into a new object literal-> transfers keys/values (instead of explicitly adding values, and then having to update if they change)
//WHEN A USER CLICKS A CONNECTED FORM ELEMENT: the state is set first, then the element changes to show the new state
//MAP METHOD: the map() method creates a new array with the results of calling a provided function on every element in the calling array.
//FILTER METHOD: the filter() method creates a copy of an array while removing some of it's elements
//IF VALUE IS A VARIABLE, !value evaluates to TRUE when value is false
//IF VARIABLE isFiltered is FALSE, !isFiltered && 'showAll' evaluates to the string 'showAll'
//PROP-TYPES LIBRARY: React lib ensures props passed into component are type program expects
//TO ALLOW A CHILD COMPONENT TO CHANGE ITS PARENT'S STATE IN RESPONSE TO USER EVENTS, THE EVENT HANDLER NEEDS TO BE DEFINED ON THE PARENT
//TO PASS DATA TO A CHILD COMPONENT FROM ITS PARENT, THE DATA NEEDS TO GO ON THE CHILD'S PROPS