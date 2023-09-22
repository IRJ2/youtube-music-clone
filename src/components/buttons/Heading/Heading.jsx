import React from 'react';
import './Heading.css';
const Heading = (props) => {
    return (
        <div className='heading'>
            <h2 className='heading-sub'>{props.subheading}</h2>
            <h1 className='heading-main'>{props.heading}</h1>
        </div>
    );
}

export default Heading;
