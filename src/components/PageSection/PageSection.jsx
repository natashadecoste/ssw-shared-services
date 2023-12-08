import React from 'react';
import './PageSection.scss';

const PageSection = (props) => {
    return (
        <div className='page-section' id={props.id}>
            {props.title && <h4>{props.title}</h4>}
            {props.content && <p className='content-body'>{props.content}</p>}
            {props.children}
        </div>
    )
}

export default PageSection;