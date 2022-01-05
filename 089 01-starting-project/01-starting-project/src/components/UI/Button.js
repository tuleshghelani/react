import React from 'react'
// import classes from './Button.module.css'

export default function Button(props) {
    return (
        <div>
            <Button className="classes.button" type={props.type || 'button'} onClick={props.onClick}>
                    {props.children}
            </Button>
            
        </div>
    )
}
