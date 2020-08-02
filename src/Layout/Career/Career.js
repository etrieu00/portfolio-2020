import React, {useState} from 'react';
import classes from './Career.module.css';

import Note from '../../Display/Note';
import Backdrop from '../../Display/Backdrop/Backdrop';
import Paragraph from '../TextFormating/Paragraph';
import Text from '../TextFormating/Text';

import {ReactComponent as Sheep} from '../../Resources/SVG/Sheep.svg';

const About = (props) => {
    const[state,setState] = useState(
        {
            cs: false,
            tsi: false,
            ce: false,
            skills: false,
            backdrop: false,
        }
    );

    const OpenOverlay = (which) => {
        let update = {...state};
        update[which] = true;
        update['backdrop'] = true;
        setState(update);
    };

    const CloseOverlay = () => {
        setState({
            cs: false,
            tsi: false,
            ce: false,
            skills: false,
            backdrop: false,
        });
    }

    const OpenResume = () =>{
        // window.open('../../Resources/PDF/Eric-Trieu-Resume-Online-8-01-20.pdf','_newtab');
    };

    return(
        <div className={classes.Career}>
            <Backdrop mode={state.backdrop}/>
            <Note 
            type="Large" 
            styles={state.cs ? classes.Overlay : classes.Hide}
            click={CloseOverlay}>
                <Text type="Title">Relevant Courses</Text>
                <Paragraph>
                    <Text type="Medium" color="Grey">- Concurrent and distributed systems</Text>
                    <Text type="Medium" color="Grey">- Intro to artificial intelligence</Text>
                    <Text type="Medium" color="Grey">- Analysis of algorithms</Text>
                    <Text type="Medium" color="Grey">- Data structures</Text>
                    <Text type="Medium" color="Grey">- Security engineering</Text>
                    <Text type="Medium" color="Grey">- Computer system architecture</Text>
                    <Text type="Medium" color="Grey">- Operating Systems</Text>
                    <Text type="Medium" color="Grey">- Database concepts</Text>
                    <Text type="Medium" color="Grey">- Software engineering</Text>
                    <Text type="Medium" color="Grey">- Probability and statistics</Text>
                </Paragraph>
            </Note>
            <Note 
            type="Large" 
            styles={state.tsi ? classes.Overlay : classes.Hide}
            click={CloseOverlay}>
                <Text type="Title">Trident Systems Incorperated</Text>
                <br/>
                <Text type="Title">Software Engineeer</Text>
                <Paragraph>
                    <Text type="Medium" color="Grey">- UI/UX design with Figma</Text>
                    <Text type="Medium" color="Grey">- UI development in JavaFX and CSS</Text>
                    <Text type="Medium" color="Grey">- Data Parsing and translating with Python</Text>
                    <Text type="Medium" color="Grey">- Message parsing and translating with C++</Text>
                    <Text type="Medium" color="Grey">- Database management with SQL</Text>
                    <Text type="Medium" color="Grey">- Bash scripting to automate build and deployment</Text>
                    <Text type="Medium" color="Grey">- Junit testing</Text>
                    <Text type="Medium" color="Grey">- Code analysis and security checks</Text>
                    <Text type="Medium" color="Grey">- Documentation of the project</Text>
                    <Text type="Medium" color="Grey">
                        Involved development with project ERSA. 
                        Fully designed and implemented a new user 
                        interface that will be used daily by the 
                        customers when released. Optimized and 
                        reduced legacy code. Introduced modern 
                        design patterns to improve maintainability. 
                        Helped resolve security vulnerabilities. 
                        Thorough documentation of the project and 
                        creation of user manuals.
                    </Text>
                </Paragraph>
            </Note>
            <Note 
            type="Large" 
            styles={state.ce ? classes.Overlay : classes.Hide}
            click={CloseOverlay}>
                <Sheep className={classes.Sheep}/>
            </Note>
            <Note 
            type="Large" 
            styles={state.skills ? classes.Overlay : classes.Hide}
            click={CloseOverlay}>
                <Text type="Title">Relevant Technical Skills</Text>
                <Paragraph>
                    <Text type="Medium" color="Grey">•	Java – User interfaces with JavaFX, server applications with sockets, XML parsing and translating, and correlating data in batches.</Text>
                    <Text type="Medium" color="Grey">•	Python – Web scraping, Data parsing and translating, NumPy, Pandas, and machine learning experiments with scikit-learn</Text>
                    <Text type="Medium" color="Grey">•	JavaScript/HTML/CSS – React and Angular from Udemy courses to build single page responsive applications</Text>
                    <Text type="Medium" color="Grey">•	C – OpenSSL encryptions with AES and DES, steganography</Text>
                    <Text type="Medium" color="Grey">•	C++ – Translating data from different formats into a format that can be used by ERSA </Text>
                    <Text type="Medium" color="Grey">•	Bash – Scripts for build and deployment of project ERSA and automation of certain tasks that help facilitate development</Text>
                    <Text type="Medium" color="Grey">•	GIT – Collaboration with other members on the same project and GitHub pages</Text>
                    <Text type="Medium" color="Grey">•	Figma/Adobe Photoshop and Illustrator – Used to create wireframes and prototypes</Text>
                    <Text type="Medium" color="Grey">•	Windows/Linux/OSX – Proficient with most operating systems and Linux commands</Text>
                </Paragraph>
            </Note>

            <Note 
            type="Small" 
            styles={classes.CS}
            click={ () => OpenOverlay('cs') }>
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
            <Note 
            type="Small" 
            styles={classes.TSI}
            click={ () => OpenOverlay('tsi') }>
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
            <Note 
            type="Small" 
            styles={classes.CE}
            click={ () => OpenOverlay('ce') }>
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
                <Text type="Normal" color="Grey">
                    Click here to check out my&nbsp;
                    <Text type="Normal" color="Green">resume!</Text>
                </Text>
            </Note>
            <Note 
            type="Small" 
            styles={classes.Skills}
            click={ () => OpenOverlay('skills') }>
                <Text type="Title">Skills</Text>
                <Paragraph>
                    <Text type="Medium" color="Grey">- Java</Text>
                    <Text type="Medium" color="Grey">- Python</Text>
                    <Text type="Medium" color="Grey">- JavaScript</Text>
                    <Text type="Medium" color="Grey">- C/C++</Text>
                    <Text type="Medium" color="Grey">- SQL</Text>
                </Paragraph>
            </Note>
        </div>
    );
};

export default About;