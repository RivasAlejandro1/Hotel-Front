import UnitUser from '../UnitUser/UnitUser';
import style from './UserList.module.css';
import { useEffect, useState } from 'react';
import { getAllUsersAxios } from './getAllUsersAxios';
export default function UserList() {
        //* Handle AllUsers
        const [allUsers, SetAllUsers] = useState([])
    
        //* Handle HTTPRequest

        useEffect( ()=>{
            const Fetch =async()=>{
                try {
                    const FindedAllUsers = await getAllUsersAxios();
                    SetAllUsers(FindedAllUsers)
                }catch(error){
                    console.log(error.response.data.error)
                }

            }

            Fetch();

        },[])


    return(
        <section className={style.UserList}>
            
            <h2>Usuarios Registrados</h2>
           

            <div className={style.UsersContainer}>
                <UnitUser
                    id="ID"
                    name="Nombre"
                    lastName="Apellido"
                    cedula="Cedula"
                    birhdate="Fecha de Nacimiento"
                    email="Email"
                    administrador="Admin"
                    columna = {true}
                ></UnitUser>
                {
                    allUsers.map((user)=>(

                        <UnitUser
                            key={`user_${user.id}`}
                            id={user.id}
                            name={user.name}
                            lastName={user.lastName}
                            cedula={user.cedula}
                            birhdate={user.birthdate} 
                            email={user.email}
                            administrador={user.administrador ?  "True" : "False"}
                            columna = {false}
                        ></UnitUser>
                    ))
                }
               
               
               
               
                
            </div>
            
        </section>
    )
}       

