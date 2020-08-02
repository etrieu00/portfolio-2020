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
                    <Text color="Grey" type="Large">
                        Hi, my name is&nbsp;
                        <Text color="Green" type="Large">Eric Trieu</Text>
                    </Text>
                    <Text color="Grey" type="Large">Welcome to my webpage!</Text>
                    <Text color="Grey" type="Large">
                        <Text color="Red" type="Large">Scroll Down&nbsp;</Text>
                        to learn more about&nbsp;
                        <Text color="Green" type="Large">me</Text>
                    </Text>
                    <Text color="Grey" type="Large">
                        Alternatively, use the&nbsp;
                        <Text color="Red" type="Large">buttons&nbsp;</Text>
                        on the right
                    </Text>
                    <Text color="Grey" type="Large">
                        to quickly navigate throught the site.
                    </Text>
                    <Text color="Grey" type="Large">
                        <Text color="Red" type="Large">Click</Text>
                        &nbsp;on some of my notes for even more&nbsp;
                        <Text color="Green" type="Large">details!</Text>
                    </Text>
                </Paragraph>
            </Note>
        </div>
    );
};

export default Home;