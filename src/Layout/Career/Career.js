import React from 'react';
import classes from './Career.module.css';
import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

const About = (props) => {
    return(
        <div className={classes.Career}>
            <Note type="Small" styles={classes.CS}>
                <Paragraph>
                    <Text type="Title"> Computer</Text>
                    <Text type="Title"> Science</Text>
                    <Text type="Normal" color="Grey">I graduated at</Text>
                    <Text type="Normal" color="Red">George Mason University</Text>
                    <Text type="Normal" color="Grey">with a B.S. in</Text>
                    <Text type="Normal" color="Green">Computer Science.</Text>
                    <Text type="Normal" color="Red"> ~ December 2019</Text>
                </Paragraph>
            </Note>
            <Note type="Small" styles={classes.TSI}>

            </Note>
            <Note type="Small" styles={classes.CE}>

            </Note>
            <Note type="Medium" styles={classes.Skills}>

            </Note>
            <Note type="Small" styles={classes.Other}>

            </Note>
        </div>
    );
};

export default About;