import React from 'react';
import classes from './Note.module.css';

const Note = (props) => {
    return(
        <div
        className={[classes.Note, classes[props.type],props.styles].join(' ')}
        onClick={props.click}>
            { ['UL','UR','LR','LL'].map(pos => <div 
                                                    key={pos}
                                                    className={[classes.Tac, classes[pos]].join(' ')}
                                                />)}
            {props.children}
        </div>
    );
};

export default Note;