import React from 'react'
import {useForm} from 'react-hook-form'

const AddUserForm = (props) => {

    const {register, handleSubmit, formState: { errors }} = useForm()
    
    const onSubmit = (data, e) => {
        console.log(data)

        props.addUser(data)
        
        e.target.reset(); //Para limpiar los campos
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" name="name" {...register("name", {required: true, maxLength: 10})}/>
        <div>
            {errors.name && errors.name.type === "required" && <span>Este campo es requerido</span>}
        </div>
        <label>Username</label>
        <input type="text" name="username" {...register("username", {
            required: {value: true, message: 'Campo Requerido'}
        })} ></input>
            <div>
            {errors.username && errors.username.type === "required" && <span>Este campo es requerido</span>}
            </div>
        <button>Add new user</button>

    </form>
  )
}

export default AddUserForm