import React, {Component} from 'react';
import './generator.css';
import Person from "../People/person";
import {getInformation} from "../api-service/api-service";
import {convertDate} from "../util/convertDate";
import Spinner from "../spinner/spinner"
import Button from "../buttons/buttons";
import {createId} from "../util/createId";

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
                yCity: "CITY",
                yPicture: "../../images/user",
                yId: "ID"
            },
        ],
        loading: false
    };

    createPeople = () => {
        // @ts-ignore
        const id = createId();
        getInformation().then((res) => {
            this.setState({
                people: [
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
                        //@ts-ignore
                        yStreet: res.location.street.name,
                        //@ts-ignore
                        yId: id,
                        //@ts-ignore
                        yCity: res.location.city,
                    },
                    ...this.state.people,
                ],
                loading: false,
            } as Information);
            console.log(res);
        });
    };

    addPersonClicked = () => {
        this.setState({
            loading: true
        });
        this.createPeople();
    };

    cleanClicked = () => {
        this.setState({
            people:[
                {
                    yName: "NAME",
                    yGender: "GENDER",
                    ySurname: "SURNAME",
                    yBirthday: "YOUR_AGE",
                    yStreet: "STREET",
                    yCountry: "COUNTRY",
                    yPicture: "../../images/user",
                    yId: "ID",
                    yCity: "CITY",
                }
            ]
        })
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let people: any = null;
        if(this.state.loading){
            people = <Spinner/>
        }
        else {
             people = this.state.people.map(people => (
                    <Person
                            name={people.yName}
                            surname={people.ySurname}
                            gender={people.yGender}
                            birthday={people.yBirthday}
                            picture={people.yPicture}
                            street={people.yStreet}
                            city={people.yCity}
                            id={people.yId}/>
                ));
        }

        return (
            <header>
                <div>
                    <div className="header">
                        <div className="header-text">Randomize</div>
                    </div>
                    <div className="backgroundFlexBox">
                        <Button classN="button-random" onclick={this.cleanClicked}>
                            <i className="fa fa-lg fa-apple"/>
                        </Button>
                        <div className="flexbox style-1">
                            {people}
                        </div>
                        <Button classN="button-random" onclick={this.addPersonClicked}>
                            <i className="fa fa-lg fa-random"/>
                        </Button>
                    </div>
                </div>
            </header>
        );
    }
}