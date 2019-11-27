import React from "react";
import './people.css'
import '../spinner/spinner.css'

interface PeopleProps {
    name: string,
    surname: string,
    gender: string,
    birthday: string,
    street: string,
    picture: string,
    city: string,
    id: string
}

const Person = ({name, surname, gender, birthday, street, city, id, picture} : PeopleProps) => (
    <div className="people">
        <header className="header-licence">DRIVER'S LICENCE</header>
        <div className="licence-general-information-block">
            <img className="licence-image" src={picture} alt=""/>
            <div className="licence-information">
                <div className="name-template">1. {surname} {name}</div>
                <div className="name">2. {gender}</div>
                <div>3. {id}</div>
                <div>3. {birthday}</div>
                <div>3. {city}</div>
                <div>4. {street}</div>
            </div>
        </div>
    </div>
);

export default Person;