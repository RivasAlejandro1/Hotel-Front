import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams} from 'react-router-dom'
import NavButton from "../NavButton/NavButton";
import style from './Nav.module.css';
import logo from '../../assets/logo1.jpg';
import Login from "../Login/Login";
import { useEffect, useState } from "react";
import loadingInfoLocalStorage from "./loadingInfoLocalStorage";
import navigateAndScrollTo from "./NavigateAndScrollTo";
import closeSesion from "./closeSesion.jsx";

export default function Nav (){

    //* Acomodar el login a su estado inicial - Aparacer o desaparecer 
    const location = useLocation();
    const navigate = useNavigate();
    const [ ApperLogin, setApperLogin] = useState(true);
    const changeApperLogin = () => {
        setApperLogin(!ApperLogin);
    }
    useEffect( ()=>{
        setApperLogin(true)
    },[location])
    
    
    
    //* CARGA DE localStorage 
    const [typeUser, setTypeUser] = useState("");
    useEffect(()=> {
        const infoLocalStorage = loadingInfoLocalStorage();
        if(infoLocalStorage) {
            const {id, admin, token} = infoLocalStorage
            setTypeUser({id, admin, token});
        }else{
            setTypeUser("");
        }
    }, [location])
   


    return(
        <>
            <nav className={style.Nav}>
                <div  className={style.logo} >
                    <img src={logo}></img>
                </div>

                <ul>
                    <NavButton path="inicio" name="Inicio"></NavButton>
                    <NavButton path="QuienesSomos" name="¿Quienes Somos?"></NavButton>
                    <NavButton path="Habitaciones" name="Habitaciones"></NavButton>


                    {  typeUser?.id && typeUser?.token && typeUser?.admin  ? 
                        <>
                                <NavButton path="admin" name="Admin"></NavButton>
                                <li className={style.LogIn}>
                                    <button onClick={()=> closeSesion(navigate)}> Cerrar Sesión</button>
                                </li>
                        </>
                        : typeUser?.id && typeUser?.token ?
                        <>
                                <NavButton path="reservaciones" name="Reservaciones"></NavButton>
                                <li className={style.LogIn}>
                                    <button onClick={()=> closeSesion(navigate)}> Cerrar Sesión</button>
                                </li>
                        </> 
                        : 
                        <>
                            <NavButton path="registrarse" name="Registrarse"></NavButton>
                            <li className={style.LogIn}>
                                <button onClick={() => changeApperLogin()}> Iniciar Sesión</button>
                            </li>
                        </>
                    }
                        
                </ul>



                <button className={style.button} onClick={() => navigateAndScrollTo(navigate,"inicio", "Contact")}>
                    Contactanos 
                </button>
            
            </nav>

            {
            typeUser.token ?
            <></> 
            :
                <Login
                    Apper= {ApperLogin}
                ></Login>
            }
     
              
        </>
    )
}
