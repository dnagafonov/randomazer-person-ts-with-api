import React from 'react';
import './App.css';
import names from './jsons/firstname.json'
import surnames from './jsons/lastname.json'
import ages from './jsons/ages.json'
import streets from './jsons/streets.json'
import {link} from "fs";

class App extends React.Component{
  state = {
    peoples: [
      {
        name: "Ivan",
        surname: "Ivanov",
        street: "comarskaya",
        age: "12"
      }
    ],
    name: null,
    surname: null,
    age: null,
    street: null
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

  getRandomStreet = () => {
    this.setState({
      street: this.getRandom(streets)
    })
  };

  createPeople = () => {
    this.getRandomName();
    this.getRandomSurname();
    this.getRandomAge();
    this.getRandomStreet();

    if(this.state.street !== null){
      this.setState({
        peoples:[
          ...this.state.peoples,
          {
            name: this.state.name,
            surname: this.state.surname,
            age: this.state.age,
            street: this.state.street,
          }
        ]
      })
    }
  }

  handleClicked = () => {
    this.createPeople();
  };
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const peoples: Array<object> = this.state.peoples.map((people) => (
        <div>
          <People name={people.name} surname={people.surname} street={people.street} age={people.age}/>
        </div> ))
    return (
        <div>
          <div className="header">
            Radnomize
            <button className="button" onClick={this.handleClicked}>click</button>
          </div>
          <ul style={{listStyleType:"none"}}>
            {peoples}
          </ul>
        </div>
    );
  }
}

// @ts-ignore
const People = ({name, surname, age, street}) => (
    <div className="people">
      <div>{surname + " " + name}</div>
      <div>Age:{age}</div>
      <div>Street:{street}</div>
    </div>
)

export default App;
