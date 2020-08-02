import React, {useState} from 'react';
import classes from './Traffic.module.css';

import Button from '../Buttons/Button';

const Traffic = (props) => {
    const [state,setState] = useState({
        home: true,
        career: false,
        contact: false,
        about: false,
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
            { ['home', 'career', 'contact', 'about'].map( value => ( <Button 
                                        key={ value } 
                                        click={() => clickHanler(value)}
                                        active={state[value]}
                                        link={'/' + value}/>)
                                    )
            }
        </div>
    );
}

export default Traffic;