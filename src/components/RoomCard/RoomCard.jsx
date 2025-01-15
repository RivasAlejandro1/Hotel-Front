import style from './RoomCard.module.css';
import img1 from '../../assets/1.jpg'

import img2 from '../../assets/vectors/turista.png';
import img3 from '../../assets/vectors/dolar.png';


import Sencilla from '../../assets/7.jpg';
import Doble from '../../assets/16.jpg';
import Familiar from '../../assets/12.jpg';

export default function RoomCard(e) {
    return(
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
                <button >
                    Reservar
                </button>
            </div>
        </div>
    )
}