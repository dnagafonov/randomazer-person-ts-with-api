import React, { Component } from 'react';
import names from '../../assets/name.json'
import surnames from '../../assets/secondname.json'
import ages from '../../assets/age.json'
import streets from '../../assets/streets.json'
import './generator.css';
import getRandom from "../Random/random";
import People from "../People/people";

export default class Generator extends Component {
    state = {
        people: [
            {
                name: "NAME",
                surname: "SURNAME",
                age: "YOUR_AGE",
                street: "STREET"
            }
        ]
    };

    getRandomName = () => getRandom(names);
    getRandomSurnames = () => getRandom(surnames);
    getRandomAge = () => getRandom(ages);
    getRandomStreet = () => getRandom(streets);

    createPeople = () => {
        this.setState({
            people: [
                ...this.state.people,
                {
                    name: this.getRandomName(),
                    surname: this.getRandomSurnames(),
                    age: this.getRandomAge(),
                    street: this.getRandomStreet()
                }
            ]
        })
    };

    handleClick = () => this.createPeople();

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const people: Array<object> = this.state.people.map((people) => (
            <div>
                <People name={people.name} surname={people.surname} street={people.street} age={people.age}/>
            </div> ));

        return (
            <header>
                <div>
                    <div className="header">
                        <div className="header-text">Radnomize</div>
                        <button className="button" onClick={this.handleClick}><i className="fa fa-random"/></button>
                    </div>
                    <div className="backgroundFlexBox">
                        <div className="flexbox">
                            {people}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}