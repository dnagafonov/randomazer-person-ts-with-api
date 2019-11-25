import React from "react";
import './people.css'

interface PeopleProps {
    name: string,
    surname: string,
    age: string,
    street: string
}

const People = ({name, surname, age, street} : PeopleProps) => (
    <div className="people">
            <div className="name">{surname + " " + name}</div>
            <div className="age">Age: {age}</div>
            <div className="geoposition">Street: {street}</div>
    </div>
);

export default People;