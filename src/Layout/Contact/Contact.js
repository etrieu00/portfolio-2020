import React from 'react';
import classes from './Contact.module.css';

import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

import GithubLogo from '../../Resources/Logos/GitHub_Logo.png'; 
import GithubMark from '../../Resources/Logos/GitHub-Mark-120px-plus.png';
import LinkedinLogo from '../../Resources/Logos/LI-Logo.png';

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
                <img 
                src={GithubLogo}
                alt="Github"
                className={classes.CenterImage} 
                style={{top: '30%'}}/>
                <img 
                src={GithubMark}
                alt="Octo cat!"
                className={classes.CenterImage} 
                style={{width: '30%',top: '70%'}}/>
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
                <img 
                src={LinkedinLogo} 
                alt="Linkedin"
                className={classes.CenterImage}></img>
            </Note>
        </div>
    );
};

export default Contact;