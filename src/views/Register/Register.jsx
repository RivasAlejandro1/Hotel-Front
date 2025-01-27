import style from './Register.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import registerAxios from './registerAxios';

export default function Register (e) {
    
        const [MakeRegister, setMakeRegister] = useState(false);
        const [messageError, setMessageError] = useState("");
    
        //* Handle HTTPRequest
        const { register, handleSubmit, formState: {errors}} = useForm();
        const onSubmit = handleSubmit( async (data) => {
            const {name, lastName,  birthdate, cedula, password, confirmPassword, email} = data;
            console.log({
                name,
                lastName,
                birthdate,
                cedula,
                password,
                confirmPassword,
                email
            })

            try {
                await registerAxios({
                    name,
                    lastName,
                    birthdate,
                    cedula,
                    password,
                    confirmPassword,
                    email
                });

                setMakeRegister(true)
                setMessageError("")
            }catch(error){
                console.log()
                const {response:{data}} = error;
                setMessageError(data)
            }
            
    
            
    
        })
    

    return(
        <div className={style.Register}>
            <div className={style.fondoGris}></div>
            <div className={style.shape1}></div>
            <div className={style.shape2}></div>
            <div className={`${style.shape2} ${style.shape2_2}`}></div>
            <div className={`${style.shape2} ${style.shape2_3}`}></div>


            <div className={style.InfoContainer}>
                <h1> Registrate</h1>
                <form className={style.formContainer} onSubmit={onSubmit}>
                    <div className={style.InputsContainer}>
                        <label htmlFor="Nombre" className={style.label}>Nombre</label>
                        <input
                            id="Nombre"
                            name="Nombre"
                            placeholder='Ejemplo: Arnold'
                        {...register("name", {
                        required: {
                            value: true,
                            message: "Nombre Salida Requerida"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.name ?  <span className={style.errors}>{errors.name.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Apellido" className={style.label}>Apellido</label>
                        <input
                            id="Apellido"
                            name="Apellido"
                            placeholder='Ejemplo: Ramirez'
                        {...register("lastName", {
                        required: {
                            value: true,
                            message: "Apelido es Requerido"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.lastName ?  <span className={style.errors}>{errors.lastName.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Fecha de Nacimiento" className={`${style.label} ${style.labelLittleLetter}`}>Fecha de Nacimiento</label>
                        <input
                            id="Fecha de Nacimiento"
                            name="Fecha de Nacimiento"
                            placeholder='Ejemplo: 1998-04-02'
                            type='date'
                            
                        {...register("birthdate", {
                        required: {
                            value: true,
                            message: "Fecha Nacimiento es Requerido"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.birthdate ?  <span className={style.errors}>{errors.birthdate.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Cedula" className={style.label}>Cedula</label>
                        <input
                            id="Cedula"
                            name="Cedula"
                            placeholder='Ejemplo: 24568789'
                        {...register("cedula", {
                        required: {
                            value: true,
                            message: "Cedula"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.cedula ?  <span className={style.errors}>{errors.cedula.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Email" className={style.label}>Email</label>
                        <input
                            id="Email"
                            name="Email"
                            placeholder='Ejemplo: example@gm.com'
                        {...register("email", {
                        required: {
                            value: true,
                            message: "Email es Requerido"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.email ?  <span className={style.errors}>{errors.email.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Contraseña" className={style.label}>Contraseña</label>
                        <input
                            id="Contraseña"
                            name="Contraseña"
                            placeholder='******'
                            type='password'
                        {...register("password", {
                        required: {
                            value: true,
                            message: "Coontraseña es Requerida"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.password ?  <span className={style.errors}>{errors.password.message}</span> : <></>}

                    <div className={style.InputsContainer}>
                        <label htmlFor="Repita Contraseña" className={`${style.label} ${style.labelLittleLetter}`}>Repita Contraseña</label>
                        <input
                            id="Repita Contraseña"
                            name="Repita Contraseña"
                            placeholder='******'
                            type='password'
                                
                        {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: "Repita Contraseña es Requerida"
                        },
                        /* pattern: {
                            value: emailRegex,
                            message: emailRegexMessage
                        }, */
                        })}
                        ></input>
                    </div>
                    {errors.confirmPassword ?  <span className={style.errors}>{errors.confirmPassword.message}</span> : <></>}

                  

                    <button className={style.ButtonContainer} type='submit'> Registrarte</button>

                    {
                        MakeRegister ? <span className={`${style.errors} ${style.AllGood}`}>Registro hecho con Exito</span> : <></>
                    }
                    {
                        messageError ? <span className={`${style.errors}`}>{messageError}</span> : <></>
                    }
                </form>

            </div>



        </div>
        

    )
    
}