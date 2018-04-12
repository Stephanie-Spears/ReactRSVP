import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";


class App extends Component {
  state = {
    guests: [
      {
        name: 'Stephanie Spears',
        isConfirmed: false,
        isEditing: false,
      },
      {
        name: 'Max Smiley',
        isConfirmed: true,
        isEditing: false,
      },
      {
        name: 'Cody Long',
        isConfirmed: false,
        isEditing: true,
      },
    ]
  };

  //Handler to confirm guests
  //Confirmation is a boolean, so we don't need to accept a value from the checkbox, we can simply flip the value every time it's clicked (ie. when the event is triggered)
  toggleConfirmationAt = indexToChange => //takes index as arg
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return {
            ...guest, //object spread operator
            isConfirmed: !guest.isConfirmed //flip isConfirmed value
          };
        }
        return guest;
      })
    }); //need to pass this method down to Guest component and bind it to the checkboxes change event

  getTotalInvited = () => this.state.guests.length;
  //getAttendingGuests = () =>
  //getUnconfirmedGuests = () =>

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A React App</p>
          <form>
            <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
            </tbody>
          </table>

          <GuestList guests={this.state.guests}
                     toggleConfirmationAt={this.toggleConfirmationAt}
          />

        </div>
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
//KEY PROPERTY: helps identfy which items have changed, been added, or removed
//SPREAD(...)OPERATOR: Copy all of an object's properties into a new object literal-> transfers keys/values (instead of explicitly adding values, and then having to update if they change)
//WHEN A USER CLICKS A CONNECTED FORM ELEMENT: the state is set first, then the element changes to show the new state