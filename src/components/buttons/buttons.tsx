import React from 'react';
import './buttons.css'

const Button = (props: any) => (
    <button className={props.classN} onClick={props.onclick}>{props.children}</button>
);

export default Button;