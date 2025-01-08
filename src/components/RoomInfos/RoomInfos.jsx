import style from './RoomInfos.module.css'
import RoomSlide from '../RoomSlide/RoomSlide';
import sencilla  from '../../assets/vectors/Sencilla.png';
import double  from '../../assets/vectors/double.png';
import familiar  from '../../assets/vectors/familiar.png';
export default function RoomInfos (e) {

    return(
        <section className={style.RoomInfos}>
            <h1>Clases de habitaciones</h1>
            <div className={style.slidesContainer}>
                <RoomSlide
                t2="Sencilla"
                p="Cama Matrimonial y cama individual, baño privado, balcón. (Cantidad: 1)"
                img = {sencilla}
                ></RoomSlide>
                <RoomSlide
                p="Dos camas matrimoniales y una cama individual, baño privado, balcón con
                vista al mar. (Cantidad: 3)"
                t2="Doble"
                img = {double}
                ></RoomSlide>
                <RoomSlide
                t2="Familiar"
                p="Tres camas matrimoniales y una litera, baño privado, balcón con
                vista al mar. (Cantidad: 3)"
                img = {familiar}
                ></RoomSlide>
            </div>
        </section>
    )
}