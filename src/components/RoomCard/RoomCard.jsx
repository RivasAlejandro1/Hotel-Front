import style from './RoomCard.module.css';
import img2 from '../../assets/vectors/turista.png';
import img3 from '../../assets/vectors/dolar.png';


import Sencilla from '../../assets/7.jpg';
import Doble from '../../assets/16.jpg';
import Familiar from '../../assets/12.jpg';



import ReservationForm from '../ReservationForm/ReservationForm';
import { useState } from 'react';



export default function RoomCard(e) {

    
    
    
    //* AppearForm
    const [activeReserve, setActiveReserve] = useState(false);
    const appearReserveForm  = (state = true) => {
        setActiveReserve(state);
    }

    
   

    return(
        <>
            {/* //! ReserveForm */} 

           { activeReserve ? <ReservationForm close={appearReserveForm} numbers={e.numbers}></ReservationForm>: <></>}

            {/* //! RoomCard */} 
            <div className={style.RoomCard}>
                <div className={style.ImgContainer}>
                    <img src={
                        e.title == "Sencilla" ?
                        Sencilla : 
                        e.title == "Doble" ?
                        Doble : 
                        Familiar 
                    }></img>
                    <div className={style.shadow}></div>
                </div>




                <div className={style.InfoContainer}>
                    <h2>{e.title}</h2>
                    <p>{e.text}</p>
                    <div className={style.spaceInfoContainer}>
                        <img src={img2} ></img>
                        <p>{e.number} huéspedes</p>
                    </div>
                    <div className={style.spaceInfoContainer}>
                        <img src={img3} ></img>
                        <p>{e.price}</p>
                        
                    </div>
                    <button onClick={()=>appearReserveForm()} >
                        Reservar
                    </button>
                </div>
            </div>
        </>
    )
}