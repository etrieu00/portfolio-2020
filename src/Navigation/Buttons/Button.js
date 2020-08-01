import React from 'react';
import classes from './Button.module.css';
const Button = (props) => {
    return (
        <div 
        className={[classes.Button, !props.active? classes.inactive : classes.active].join(' ')} 
        onClick={props.click}>
        </div>);
}

export default Button;