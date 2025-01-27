import style from './Login.module.css';
import { useForm }  from 'react-hook-form';
import { emailRegex,emailRegexMessage } from '../../helpers/validateEmail';
import { validatePassword } from '../../helpers/validatePassword';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_ENDPOINT = "http://localhost:3000/login"

export default function Login(e) {

    const { register, handleSubmit, formState: {errors}} = useForm();
    const Navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        const {password, email} = data;
        const info = {password, email};
        
        try {
            axios.post(API_ENDPOINT, info).then(
                ({data}) => {
                    window.localStorage.setItem(
                        'loggedIdAppUser', JSON.stringify(data.id)
                    );
                    window.localStorage.setItem(
                        'loggedTokenAppUser', JSON.stringify(data.token)
                    );
                    window.localStorage.setItem(
                        'loggedTypeAppUser', JSON.stringify(data.administrador)
                    );
                    Navigate("/")
           })

        }catch(error){
            console.log(error.response.data)
        }
       
    })

    return(
        <form 
            onSubmit={onSubmit} 
            className={
                e.Apper ? 
                style.Login
                : style.LogInDisApper
                }
        >
                <label
                    htmlFor='email' 
                ></label>
                <input
                    type='text'
                    id="email"
                    name="email"
                    placeholder='Email'
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Correo es requerido"
                        },
                        pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        },
                    })}
                ></input>
                {
                    errors.email ?  <span className={style.errors}>{errors.email.message}</span> : <></>
                }
                <label
                    htmlFor='password'
                ></label>
                <input
                    type='password'
                    id="password"
                    name="password"
                    placeholder='Password'
                    
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password es requerido"
                        },
                        validate: (value)=> validatePassword(value)
                    })}
                ></input>
                {
                    errors.password ?  <span className={style.errors}>{"Complete la contraseña"}</span> : <></>
                }

                <button className={style.button} > Iniciar sesión </button>
                <div className={style.link}>
                    <a className={style.button}>
                                Crear una nueva cuenta 
                    </a>
                </div>

        </form>
    )
}   