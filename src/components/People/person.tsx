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
}

const Person = ({name, surname, gender, birthday, street, picture} : PeopleProps) => (
    <div className="people">
        <header className="header-licence">DRIVER'S LICENCE</header>
        <div className="licence-general-information-block">
            <img className="licence-image" src={picture} alt=""/>
            <div className="licence-information">
                <div>1. {surname} {name}</div>
                <div>2. {gender}</div>
                <div>3. {birthday}</div>
                <div>4. {street}</div>
            </div>
        </div>
    </div>
);

export default Person;