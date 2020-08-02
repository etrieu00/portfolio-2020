import React from 'react';
import classes from './Contact.module.css';

import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

const Contact = () => {

    const OpenGit = () => {
        window.open('https://github.com/etrieu00','_newtab');
    };

    const OpenLinkedin = () => {
        window.open('https://www.linkedin.com/in/eric-trieu-2215b6177/','_newTab');
    };
    return(
        <div className={classes.Contact}>
            <Note type="Small" styles={classes.Git} click={OpenGit}>
                <Text type="Title">Github</Text>
                <br/>
                <br/>
                <br/>
                <Text type="Normal" color="Red">Click me!</Text>
            </Note>
            <Note type="Medium" styles={classes.ContactMe}>
                <Text type="Title">Contact me!</Text>
                <Paragraph>
                    <Text type="Normal" color="Green">etrieu00@gmail.com</Text>
                    <Text type="Normal" color="Red">etrieu2@masonlive.gmu.edu</Text>
                    <br/>
                    <br/>
                    <Text type="Normal" color="Grey">
                        Feel free to send me a&nbsp;
                        <Text type="Normal" color="Green">message!</Text>
                    </Text>
                </Paragraph>
            </Note>
            <Note type="Medium" styles={classes.Resume}>
                
            </Note>
            <Note type="Small" styles={classes.Linkedin} click={OpenLinkedin}>
                <Text type="Title">Linkedin</Text>
                <br/>
                <br/>
                <br/>
                <Text type="Normal" color="Red">Click me!</Text>
            </Note>
        </div>
    );
};

export default Contact;