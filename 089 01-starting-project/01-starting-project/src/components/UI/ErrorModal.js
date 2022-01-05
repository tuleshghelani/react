import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'

function ErrorModal(props) {
    return (
        <div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>

                <footer className={classes.actions}>
                    <Button >
                        Okay
                    </Button>
                </footer>
            </Card>
        </div>
    )
}

ErrorModal.propTypes = {

}

export default ErrorModal

