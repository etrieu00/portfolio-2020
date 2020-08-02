import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => (
    <div className={props.mode ? classes.Show : classes.Hide}>
        {props.children}
    </div>
);

export default Backdrop;