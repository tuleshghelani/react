import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


export default function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    return (
        <div>
            <ErrorModal title="An error occures"></ErrorModal>
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="userName" name="userName"
                        value={enteredUsername} onChange={usernameChangeHandler} />

                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" name="age"
                        value={enteredAge} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}