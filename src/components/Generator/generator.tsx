import React, { Component } from 'react';
import './generator.css';
import getRandom from "../Random/random";
import People from "../People/people";
import myAxios from "../../myAxios"
import axios from 'axios'
import {getInformation} from "../api-service/api-service";
import {InformationEvent} from "http";

interface Information {
    name: string,
    surname: string,
    last: string,
    gender: string,
    dob: string,
    date: string,
    city: string,
    id: string,
    picture: string
}

export default class Generator extends Component {
    state = {
        people: [
            {
                name: "NAME",
                surname: "SURNAME",
                age: "YOUR_AGE",
                street: "STREET",
                country: "COUNTRY",
            }
        ]
    };
    componentDidMount(): void {
        getInformation().then((res) => {
            this.setState({
                name: res.name,
                surname: res.name,


            })
        });
    }

    createPeople = () => {
        this.setState({
            people: [
                ...this.state.people,
                // {
                //     name: this.getRandomName(),
                //     surname: this.getRandomSurnames(),
                //     age: this.getRandomAge(),
                //     street: this.getRandomStreet(),
                // }
            ]
        })
    };

    handleClick = () => this.createPeople();

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        const people: Array<object> = this.state.people.map((people, id) => (
            <div key={id}>
                <People name={people.name} surname={people.surname} street={people.street} age={people.age}/>
            </div> ));

        return (
            <header>
                <div>
                    <div className="header">
                        <div className="header-text">Randomize</div>
                    </div>
                    <div className="backgroundFlexBox">
                        <div className="flexbox style-1">
                            {people}
                        </div>
                        <button className="button" onClick={this.handleClick}><i className="fa fa-random"/></button>
                    </div>
                </div>
            </header>
        );
    }
}