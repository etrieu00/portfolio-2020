import React from 'react';
import classes from './About.module.css';

import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

const About = (props) => {
    return(
        <div className={classes.About}>
            <Note type="Large" styles={classes.AboutMe}>

            </Note>
        </div>
    );
};

export default About;