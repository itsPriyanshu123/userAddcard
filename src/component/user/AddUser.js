import React, { useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import Userlist from './Userslist'


function AddUser(props) {

    const [enteredName, setEnteredName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredName.trim().length===0 || enteredAge.trim().length===0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        console.log(enteredAge, enteredName)
        setEnteredAge('');
        setEnteredName('');
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    return (
        <>
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='userName'>UserName</label>
                <input type='text' id='userName' value={enteredName} onChange={nameChangeHandler} />
                <label htmlFor='userName'>Age</label>
                <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler} />
                {/* <button type='submit'>Submit</button> */}
                <Button type='submit' >Add User</Button>
            </form>
        </Card>
        <Userlist name={enteredName} age={enteredAge} />
        </>

    )
}

export default AddUser