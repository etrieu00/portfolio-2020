import React from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';
const Button = (props) => {
    return (
        <Link 
        to={props.link} 
        className={[classes.Button, !props.active? classes.inactive : classes.active].join(' ')} 
        onClick={props.click}>

        </Link>
    );
}

export default Button;