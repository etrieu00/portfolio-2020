import React from 'react';
import classes from './Home.module.css';

import Note from '../../Display/Note';
import Text from '../TextFormating/Text';
import Paragraph from '../TextFormating/Paragraph';
const Home = (props) => {
    return(
        <div className={classes.Home}>
            <Note type='Large' styles={classes.Note}>
                <Paragraph>
                    <Text color="Grey" type="Title">
                        Hi, my name is&nbsp;
                        <Text color="Green" type="Title">Eric Trieu</Text>
                    </Text>
                    <Text color="Grey" type="Title">Welcome to my webpage!</Text>
                    <Text color="Grey" type="Title">
                        <Text color="Red" type="Title">Scroll Down&nbsp;</Text>
                        to learn more about&nbsp;
                        <Text color="Green" type="Title">me</Text>
                    </Text>
                    <Text color="Grey" type="Title">
                        Alternatively, use the&nbsp;
                        <Text color="Red" type="Title">buttons&nbsp;</Text>
                        on the right
                    </Text>
                    <Text color="Grey" type="Title">
                        to quickly navigate throught the site.
                    </Text>
                    <Text color="Grey" type="Title">
                        <Text color="Red" type="Title">Click</Text>
                        &nbsp;on some of my notes for even more&nbsp;
                        <Text color="Green" type="Title">details!</Text>
                    </Text>
                </Paragraph>
            </Note>
        </div>
    );
};

export default Home;