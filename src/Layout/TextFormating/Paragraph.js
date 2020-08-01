import React from 'react';

const Paragraph = (props) => (
    <p>
        {props.children.map((element,index) => [element, <br key={index}/>])}
    </p>
);

export default Paragraph;