import React from 'react';
import './message.css';


function Message(props) {
    
    const classToDispay = props.username === props.curentUsername ? 'replies' : 'recived';
    //TODO: integrate images from pre-loaded profiles
    const imageLink = `https://ui-avatars.com/api/?name=${props.username}&rounded=true&bold=true&size=128`;
    return (
            <li className={ classToDispay } >
                <img src={imageLink} alt="avatar" height="22" width="22"/>
                <div className="tooltip">
                    <p>{props.text}</p>
                    
                </div>
                <span>{props.time}</span>
            </li>
    );
};

export default Message;