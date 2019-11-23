import React from 'react';
import './App.css';
import names from './jsons/firstname.json'
import surnames from './jsons/lastname.json'
import ages from './jsons/ages.json'
import streets from './jsons/streets.json'

class App extends React.Component{
  state = {
    peoples: [
      {
        name: "NAME",
        surname: "SURNAME",
        street: "STREET",
        age: "AGE"
      }
    ],
  };

  getRandom = (list: Array<any>) => {
    const randId: any = Math.floor(Math.random() * Math.floor(list.length));
    return list[randId];
  };

  getRandomName = () => this.getRandom(names);
  getRandomSurname = () => this.getRandom(surnames);
  getRandomAge = () => this.getRandom(ages);
  getRandomStreet = () => this.getRandom(streets);
  handleClicked = () => this.createPeople();

  createPeople = () => {
      this.setState({
          peoples:[
              ...this.state.peoples,
              {
                  name: this.getRandomName(),
                  surname: this.getRandomSurname(),
                  age: this.getRandomAge(),
                  street: this.getRandomStreet(),
              }
          ]
      })
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
