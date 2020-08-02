import React from 'react';
import classes from './Career.module.css';
import Note from '../../Display/Note';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

const About = (props) => {
    const OpenResume = () =>{
        // window.open('../../Resources/PDF/Eric-Trieu-Resume-Online-8-01-20.pdf','_newtab');
    }

    return(
        <div className={classes.Career}>
            <Note type="Small" styles={classes.CS}>
                <Text type="Title"> Computer</Text>
                <Text type="Title"> Science</Text>
                <Paragraph>
                    <Text type="Normal" color="Grey">I graduated at</Text>
                    <Text type="Normal" color="Red">George Mason University</Text>
                    <Text type="Normal" color="Grey">with a B.S. in</Text>
                    <Text type="Normal" color="Green">Computer Science.</Text>
                    <Text type="Normal" color="Red">~ December 2019</Text>
                </Paragraph>
            </Note>
            <Note type="Small" styles={classes.TSI}>
                <Text type="Title">Trident Systems Inc</Text>
                <Paragraph>
                    <Text type="Normal" color="Grey">I started my first job at</Text>
                    <Text type="Normal" color="Red">Trident Systems Incorperated</Text>
                    <Text type="Normal" color="Grey">
                        In&nbsp;
                        <Text type="Normal" color="Green">January 2020</Text>
                    </Text>
                    <Text type="Normal" color="Grey">
                        as a&nbsp;
                        <Text type="Normal" color="Red">software developer</Text>
                    </Text>
                    <Text type="Normal" color="Grey">I am still working there as of</Text>
                    <Text type="Normal" color="Green">{ (new Date()).toISOString().split('T')[0] }</Text>
                </Paragraph>
            </Note>
            <Note type="Small" styles={classes.CE}>
                <Text type="Title">Computer Engineering</Text>
                <Paragraph>
                    <Text type="Normal" color="Grey">I plan to return to</Text>
                    <Text type="Normal" color="Green">George Mason University</Text>
                    <Text type="Normal" color="Grey">
                        In&nbsp;
                        <Text type="Normal" color="Red"> Spring 2021</Text>
                        &nbsp;to get another degree
                    </Text>
                    <Text type="Normal" color="Grey">
                        in&nbsp;
                        <Text type="Normal" color="Green">Computer Engineering</Text>
                    </Text>
                    <Text type="Normal" color="grey">
                        with a concentation in &nbsp;
                        <Text type="Normal" color="Red">Robotics.</Text>
                    </Text>
                </Paragraph>
            </Note>
            <Note type="Medium" styles={classes.Resume} click={OpenResume}>
                <Text type="Title">Resume</Text>
                <br/>
                <br/>
                <br/>
                <Text type="Normal">
                    Click here to check out my&nbsp;
                    <Text type="Normal" color="Green">resume!</Text>
                </Text>
            </Note>
            <Note type="Small" styles={classes.Skills}>
                <Text type="Title">Skills</Text>
                <Paragraph>
                    <Text type="Normal" color="Grey">- Java</Text>
                    <Text type="Normal" color="Grey">- Python</Text>
                    <Text type="Normal" color="Grey">- JavaScript</Text>
                    <Text type="Normal" color="Grey">- C/C++</Text>
                    <Text type="Normal" color="Grey">- SQL</Text>
                    <br/>
                    <Text type="Normal" color="Red">- Click to learn more!</Text>
                </Paragraph>
            </Note>
        </div>
    );
};

export default About;