import React from 'react'
import Card from '../UI/Card'
import classes from './userlist.module.css'
function Userslist(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {/* users is an array of object and we can decide to which type of props we should pass as we have to handle data */}
                {props.users.map((user) => (
                    <li>{user.name} ({user.age} years old)</li>
                ))}
            </ul>
        </Card>
    )
}

export default Userslist