import React from 'react';
import classes from './Text.module.css';
const Text = (props) =>(
    <span className={[classes.Text, classes[props.color], classes[props.type]].join(' ')}>
        {props.children}
    </span>
);

export default Text;