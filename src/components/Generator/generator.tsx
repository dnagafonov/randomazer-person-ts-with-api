import React, {Component, FunctionComponent} from 'react';
import './generator.css';
import Person from "../People/person";
import {getInformation} from "../api-service/api-service";
import {convertDate} from "../util/convertDate";
import Spinner from "../spinner/spinner"
import Button from "../buttons/buttons";

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
                yPicture: "../../pictures/user",
            },
        ],
        loading: false
    };

    createPeople = () => {
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
                    },
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
                    yPicture: "../../pictures/user",
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
             people = this.state.people.map((people, id) => (
                <div key={id}>
                    <Person name={people.yName}
                            surname={people.ySurname}
                            gender={people.yGender}
                            street={people.yStreet}
                            birthday={people.yBirthday}
                            picture={people.yPicture}/>
                </div> ));
        }

        return (
            <header>
                <div>
                    <div className="header">
                        <div className="header-text">Randomize</div>
                    </div>
                    <div className="backgroundFlexBox">
                        <Button classN="button-clear" onclick={this.cleanClicked}><i className="fa fa-ban"/></Button>
                        <div className="flexbox style-1">
                            {people}
                        </div>
                        <Button classN="button-random" onclick={this.addPersonClicked}><i className="fa fa-random"/></Button>
                    </div>
                </div>
            </header>
        );
    }
}