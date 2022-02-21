import React from 'react'

const UserTable = (props) => {

    console.log(props)
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
                //Recorremos la data con un map
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                         <button className="button muted-button">Edit</button>
                         <button className="button muted-button">Delete</button>
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