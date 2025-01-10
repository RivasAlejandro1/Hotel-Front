import { useSelector } from "react-redux";
import NavButton from "../NavButton/NavButton";
import style from './Nav.module.css';
import logo from '../../assets/logo1.jpg';
import Login from "../Login/Login";

export default function Nav (){
    const currentUser = useSelector(state => state.user);


    return(
        <nav className={style.Nav}>
            <div  className={style.logo} >
                <img src={logo}></img>
            </div>

            <ul>
                {  
                    currentUser ?              
                    <NavButton path="myTurns" name="myTurns"></NavButton>
                    : <></>
                }  
                <NavButton path="Inicio" name="Inicio"></NavButton>
                <NavButton path="Acerca de" name="Acerca de"></NavButton>
{/*                 <NavButton path="Contacto" name="Contacto"></NavButton>
 */}            <NavButton path="Habitaciones" name="Habitaciones"></NavButton>
                <NavButton path="Registrarse" name="Registrarse"></NavButton>
                <NavButton path="Servicios" name="Servicios"></NavButton>
                <NavButton path="/" name="Log in"></NavButton>
            </ul>

            <button className={style.button}>
                Contactanos 
            </button>
          {/*   <Login></Login> */}
        </nav>
    )
}
