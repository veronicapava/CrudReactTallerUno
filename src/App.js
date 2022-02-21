import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid' //Nos genera ids

function App() {

  //Data
  const usersData = [
    { id: uuidv4(), name: 'Veronica', username: 'verito' },
    { id: uuidv4(), name: 'Aldair', username: 'alda' },
    { id: uuidv4(), name: 'Juanita', username: 'juanitaxd' },
  ]

  //state
  const [users, setUsers] = useState(usersData)

  //Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users, //copia de los users
      user //usuario nuevo
    ])
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
