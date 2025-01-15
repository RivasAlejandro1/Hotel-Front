import RoomCard from '../../components/RoomCard/RoomCard';
import style from './Rooms.module.css';

export default function Rooms (e) {
    

    return(
        <section className={style.Rooms}>
            <div className={style.shape}>
                <h1>Habitaciones</h1>
            </div>
            <div className={style.InfoContainer}>
                <div className={style.shape1}></div>
                <RoomCard
                    title="Sencilla"
                    text="Cama Matrimonial y cama individual, baño privado, balcón."
                    number="1"
                    price="80"
                ></RoomCard>
                <RoomCard
                    title="Doble"
                    text="Dos camas matrimoniales y una cama individual, baño privado, balcón con
                vista al mar."
                    number="3"
                    price="150"
                ></RoomCard>
                <RoomCard
                    title="Familiar"
                    text="Tres camas matrimoniales y una litera, baño privado, balcón con
                vista al mar. (Cantidad: 3)"
                    number="3"
                    price="200"
                ></RoomCard>
            </div>
        </section>
        

    )
    
}