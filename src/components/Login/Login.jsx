import style from './Login.module.css';
import img1 from '../../assets/1.jpg';
export default function Login() {
    return(
        <form className={style.Login}>
                <label for="email"></label>
                <input
                    id="email"
                    name="Email o Username"
                    placeholder='Email o Username'
                ></input>
                <label for="password"></label>
                <input
                        placeholder='Password'
                ></input>

                <button className={style.button}>
                    Iniciar sesión 
                </button>
                <div className={style.link}>
                    <a className={style.button}>
                                Crear una nueva cuenta 
                    </a>
                </div>

        </form>
    )
}