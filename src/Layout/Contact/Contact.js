import React from 'react';
import classes from './Contact.module.css';

import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

const Contact = () => {
    return(
        <div className={classes.Contact}>
            <Note type="Small"  styles={classes.Git} ></Note>
            <Note type="Medium" styles={classes.ContactMe}></Note>
            <Note type="Medium" styles={classes.Other}></Note>
            <Note type="Small"  styles={classes.Linkedin} ></Note>
        </div>
    );
};

export default Contact;