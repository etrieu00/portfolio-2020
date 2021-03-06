import React from 'react';
import classes from './About.module.css';

import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

import Photo from '../../Resources/Photos/Eric-Trieu.jpg';

const About = (props) => {
    return(
        <div className={classes.About}>
            <Note type="Large" styles={classes.AboutMe}>
                <div className={classes.Container}>
                    <div className={classes.Left}>
                        <Text type="Title">About Me</Text>
                        <br/>
                        <img 
                        alt="Eric Trieu"
                        src={Photo} 
                        style={{width: '60%'}}/>
                    </div>
                    <div className={classes.Right}>
                        <Paragraph>
                            <Text type="Medium" color="Grey">My hobbies include coding, cooking, and art.</Text>
                            <Text type="Medium" color="Grey">I like to eat beef, lamb, and bread.</Text>
                            <Text type="Medium" color="Grey">Functional programming is better than object oriented programming.</Text>
                            <Text type="Medium" color="Grey">I am good at origami and random things.</Text>
                            <Text type="Medium" color="Grey">Filthy weeb who likes to read manga.</Text>
                            <Text type="Medium" color="Grey">I own a dog named Lucky and some koi fishes.</Text>
                        </Paragraph>
                    </div>
                </div>
            </Note>
        </div>
    );
};

export default About;