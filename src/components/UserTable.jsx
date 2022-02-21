import React from 'react'

const UserTable = (props) => {

    console.log(props.users)
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ?
                props.users.map(user => ( //Recorremos la data con un map
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                         <button className="button muted-button">Edit</button>
                         <button className="button muted-button" onClick={() =>{props.deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colspan={3}>NO USERS</td>
                    </tr>
                )
            }
            
        </tbody>
    </table>
  )
}

export default UserTable