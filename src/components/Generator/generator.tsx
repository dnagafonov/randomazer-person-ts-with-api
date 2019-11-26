import React, { Component } from 'react';
import './generator.css';
import People from "../People/people";
import {getInformation} from "../api-service/api-service";
import {convertDate} from "../util/convertDate";

interface Information {
    people: Array<object>;
}

export default class Generator extends Component {
    state = {
        people: [
            {
                yName: "NAME",
                yGender: "GENDER",
                ySurname: "SURNAME",
                yBirthday: "YOUR_AGE",
                yStreet: "STREET",
                yCountry: "COUNTRY",
                yPicture: "https://randomuser.me/api/portraits/men/69.jpg",
            }
        ]
    };

    componentDidMount(): void {
        getInformation().then((res) => {
            this.setState({
                people: [
                    ...this.state.people,
                    {
                        //@ts-ignore
                        yName: res.name.first,
                        //@ts-ignore
                        ySurname: res.name.last,
                        //@ts-ignore
                        yBirthday: convertDate(res.dob.date),
                        //@ts-ignore
                        yGender: res.gender,
                        //@ts-ignore
                        yPicture: res.picture.large,

                    }
                ]
            } as Information);
            console.log(res);
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
                <People name={people.yName}
                        surname={people.ySurname}
                        street={people.yStreet}
                        age={people.yBirthday}
                        picture={people.yPicture}/>
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