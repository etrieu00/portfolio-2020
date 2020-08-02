import React from 'react';
import classes from './Text.module.css';
const Text = (props) =>{

    switch(props.type){
        case 'Title':
            return (
                <h1 className={[classes.Text, classes[props.color], classes[props.type]].join(' ')}>
                    {props.children}
                </h1>
                );
        case 'Normal':
        case 'Large':
            return (
                <span className={[classes.Text, classes[props.color], classes[props.type]].join(' ')}>
                    {props.children}
                </span>
                );
        default:
            return <p>Sheep?</p>

    }

};

        

    


export default Text;