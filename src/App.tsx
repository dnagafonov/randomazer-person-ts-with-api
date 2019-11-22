import React from 'react';
import './App.css';
import names from './jsons/firstname.json'
import surnames from './jsons/lastname.json'
import ages from './jsons/ages.json'

class App extends React.Component{
  state = {
    peoples: [],
    name: "",
    surname: "",
    age: null,
  };

  getRandom = (list: Array<any>) => {
    const randId: any = Math.floor(Math.random() * Math.floor(list.length));
    return list[randId];
  };

  getRandomName = () => {
    this.setState({
      name: this.getRandom(names)
    })
  };
  getRandomSurname = () => {
    this.setState({
      surname: this.getRandom(surnames)
    })
  };
  getRandomAge = () => {
    this.setState({
      age: this.getRandom(ages)
    })
  };

  createPeople = () => {
    this.getRandomName();
    this.getRandomSurname();
    this.getRandomAge();
  }

  handleClicked = () => {
    this.createPeople();
  };
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
        <div>
          <div className="header">Radnomize</div>
          <h2>Name: {this.state.name}</h2>
          <h2>Surname: {this.state.surname}</h2>
          <h2>Age: {this.state.age}</h2>
          <button onClick={this.handleClicked}>click</button>
        </div>
    );
  }
}

export default App;
