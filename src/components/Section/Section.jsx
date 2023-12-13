import React from 'react';

import './Section.scss';
import { Button, Tag } from '@carbon/react';


const Section = (props) => {
    return (
        <div className="group">
            <div className='top-content'><h5>{props.title}</h5>
                <p className='content'>{props.content}</p></div>
            <div className="footer">
                {props.tags && <div className="tags">{props.tags.map((item, index) => <Tag key={index} size="md" type={index > 0 % 2 ? "gray" : "high-contrast"}>{item.label}</Tag>)}</div>}
                {props.actions && <div className="buttons">{props.actions.map((item, index) => <Button href={item.link} key={index} size="sm" disabled={index % 2 ? false : true} kind={index % 2 ? "ghost" : "tertiary"}>{item.label}</Button>)}</div>}
            </div>
        </div>
    )
}

export default Section