import React, { Component } from 'react';
import classes from './Card.module.css';

export default function Card(props) {
    return (
        <div className={`${classes.card} ${props.cssClass}`}>
            {props.children}
        </div>
    )
}



