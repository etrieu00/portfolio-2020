import React, {useState} from 'react';
import classes from './Traffic.module.css';

import Button from '../Buttons/Button';

const Traffic = (props) => {
    const [state,setState] = useState({
        button1: true,
        button2: false,
        button3: false,
        button4: false,
    });

    const clickHanler = (change) => {
        let update = {...state};
        for(const key in update){
            update[key] = false;
        }
        update[change] = true;
        setState(update);
    };

    return(
        <div className={classes.Traffic}>
            { ['button1', 'button2', 'button3', 'button4'].map( value => ( <Button 
                                        key={ value } 
                                        click={() => clickHanler(value)}
                                        active={state[value]}/>)
                                    )
            }
        </div>
    );
}

export default Traffic;