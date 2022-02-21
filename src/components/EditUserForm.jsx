import React from 'react'
import {useForm} from 'react-hook-form'

const EditUserForm = (props) => {

    console.log(props.currentUser)
  
    const {register, handleSubmit, formState: { errors }, setValue} = useForm({
        defaultValues: props.currentUser
    })
    
    setValue('name', props.currentUser.name) //Seteamos los valores de cada input al momento de editar 
    setValue('username', props.currentUser.username)


    const onSubmit = (data, e) => {
        console.log(data)
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
        <button>Edit user</button>

    </form>
  )
}

export default EditUserForm