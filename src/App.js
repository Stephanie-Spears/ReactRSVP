import React, { Component } from 'react';
import './App.css';
import GuestList from "./GuestList";

//STATE: The data an app uses to change what and how it displays
//BEST WAY to store two pieces of state that depend on each other: store only one of them and compute the other from the first as needed
//BEST WAY to share state between components: shared state should be stored in both components' nearest shared ancestor
class App extends Component {
  state = {
    guests: [
      {
        name: 'Stephanie Spears',
        isConfirmed: false,
      },
      {
        name: 'Max Smiley',
        isConfirmed: true,
      },
      {
        name: 'Cody Long',
        isConfirmed: false,
      },
    ]
  };

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

          <GuestList guests={this.state.guests}/>

        </div>
      </div>
    );
  }
}

export default App;
