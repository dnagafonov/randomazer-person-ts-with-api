import React from "react";
import './people.css'

interface PeopleProps {
    name: string,
    surname: string,
    age: string,
    street: string,
}

const People = ({name, surname, age, street} : PeopleProps) => (
    <div className="people">
        <header className="header-licence">DRIVER'S LICENCE</header>
        <div className="licence-general-information-block">
            <div className="licence-image"></div>
            <div className="licence-information">
                <div>1. {surname} {name}</div>
                <div>2. {age}</div>
                <div>3. {street}</div>
            </div>
        </div>
    </div>
);

export default People;