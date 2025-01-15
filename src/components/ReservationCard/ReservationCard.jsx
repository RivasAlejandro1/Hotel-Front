import style from './ReservationCard.module.css';
import img1 from '../../assets/1.jpg'

import img2 from '../../assets/vectors/turista.png';
import img3 from '../../assets/vectors/dolar.png';
import img4 from '../../assets/vectors/puerta.png';

import Sencilla from '../../assets/7.jpg';
import Doble from '../../assets/16.jpg';
import Familiar from '../../assets/12.jpg';

export default function ReservationCard(e) {
    return(
        <div className={style.ReservationCard}>
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
                <h2>Reservación: Habitación {e.title}</h2>
                <p>{e.text}</p>
                <div className={style.spaceInfoContainer}>
                    <img src={img2} ></img>
                    <p>{e.number} huéspedes</p>
                </div>
                
                <div className={style.spaceInfoContainer}>
                    <img src={img3} ></img>
                    <p>{e.price}</p>
                    
                </div>
                <div className={style.spaceInfoContainer}>
                    <img src={img4} ></img>
                    <p>N°{e.room}</p>
                    
                </div>
                <div className={`${style.spaceInfoContainer}  ${style.spaceInfoContainer_2}`}>
                    <p>Fecha de Entrada: {e.DateEntry} </p>
                </div>
                <div className={`${style.spaceInfoContainer}  ${style.spaceInfoContainer_2}`}>
                    <p>Fecha de Salida: {e.DateOut} </p>
                </div>
                <div className={`${style.spaceInfoContainer}  ${style.spaceInfoContainer_2}`}>
                    TOTAL:
                    <p> ${e.price}</p>
                    
                </div>
                <button >
                    Pagar
                </button>
            </div>
        </div>
    )
}