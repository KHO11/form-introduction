import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name,type,checked,value} = event.target
    type === "checkbox" ? this.setState({[name] : checked}) : this.setState({[name] : value})
  }
  render() {
    return(
      <main>
        <form>
          <input
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First Name"
          />
          
          <br/>
          
          <input
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder="Last Name"
          />
          
          <br/>

          <input
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Age"
          />

          <br/>
          
          <label>
            <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
            /> Male
          </label>

          <br/>

          <label>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
            /> Female
          </label>
          
          <br/>

          <select value={this.state.destination} name="destination" onChange={this.handleChange}>
            <option value="germany">Germany</option>
            <option value="england">England</option>
            <option value="norway">Norway</option>
            <option value="Sweeden">Sweeden</option>
          </select>

          <input
          type="checkbox"
          value="isVegan"
          onChange={this.handleChange}
          checked={this.state.isVegan}
          /> Is Vegan

          <br/>

          <input
          type="checkbox"
          name="isKosher"
          onChange={this.handleChange}
          checked={this.state.isKosher}
          /> Is Kosher

          <br/>

          <input
          type="checkbox"
          name="isLactoseFree"
          onChange={this.handleChange}
          checked={this.state.isLactoseFree}
          /> Is Lactose Free
        </form>

        <hr/>

        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
        <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
        <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
      </main>
    );
  }
}
export default App;
