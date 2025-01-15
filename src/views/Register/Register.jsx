import style from './Register.module.css';

export default function Register (e) {
    

    return(
        <div className={style.Register}>
            <div className={style.fondoGris}></div>
            <div className={style.shape1}></div>
            <div className={style.shape2}></div>
            <div className={`${style.shape2} ${style.shape2_2}`}></div>
            <div className={`${style.shape2} ${style.shape2_3}`}></div>


            <div className={style.InfoContainer}>
                <h1> Registrate</h1>
                <form className={style.formContainer}>
                    <div className={style.InputsContainer}>
                        <label for="Nombre" className={style.label}>Nombre</label>
                        <input
                            id="Nombre"
                            name="Nombre"
                            placeholder='Ejemplo: Arnold'
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Apellido" className={style.label}>Apellido</label>
                        <input
                            id="Apellido"
                            name="Apellido"
                            placeholder='Ejemplo: Ramirez'
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Fecha de Nacimiento" className={`${style.label} ${style.labelLittleLetter}`}>Fecha de Nacimiento</label>
                        <input
                            id="Fecha de Nacimiento"
                            name="Fecha de Nacimiento"
                            placeholder='Ejemplo: 1998-04-02'
                            type='date'
                            
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Cedula" className={style.label}>Cedula</label>
                        <input
                            id="Cedula"
                            name="Cedula"
                            placeholder='Ejemplo: 24568789'
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Email" className={style.label}>Email</label>
                        <input
                            id="Email"
                            name="Email"
                            placeholder='Ejemplo: example@gm.com'
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Contraseña" className={style.label}>Contraseña</label>
                        <input
                            id="Contraseña"
                            name="Contraseña"
                            placeholder='******'
                        ></input>
                    </div>

                    <div className={style.InputsContainer}>
                        <label for="Repita Contraseña" className={`${style.label} ${style.labelLittleLetter}`}>Repita Contraseña</label>
                        <input
                            id="Repita Contraseña"
                            name="Repita Contraseña"
                            placeholder='******'

                                
                        ></input>
                    </div>

                  

                    <button className={style.ButtonContainer}> Registrarte</button>
                </form>

            </div>



        </div>
        

    )
    
}