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
            <div>{surname + " " + name}</div>
            <div>Age: {age}</div>
            <div>Street: {street}</div>
    </div>
);

export default People;