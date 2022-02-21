import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'
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

  //Eliminar usuarios 

  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id) //Filtrando los id, si son iguales se filtran
    setUsers(arrayFiltrado)
  }

  //Editar usuarios

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', username: ''
  })

  const editRow = (user) => {
    setEditing(true)
    setCurrentUser({
      id: user.id, name: user.name, username: user.username
    })
  }

  //Actualizar usuarios

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser} />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
