import RoomCard from '../../components/RoomCard/RoomCard';
import style from './Rooms.module.css';

export default function Rooms (e) {
    
    const Sencillo = [1,2,4];
    const Doble = [3,5];
    const Familiar = [6,7];

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
                    numbers={Sencillo}
                ></RoomCard>
                <RoomCard
                    title="Doble"
                    text="Dos camas matrimoniales y una cama individual, baño privado, balcón con
                vista al mar."
                    number="3"
                    price="150"
                    numbers={Doble}
                ></RoomCard>
                <RoomCard
                    title="Familiar"
                    text="Tres camas matrimoniales y una litera, baño privado, balcón con
                vista al mar. (Cantidad: 3)"
                    number="3"
                    price="200"
                    numbers={Familiar}
                ></RoomCard>
            </div>
        </section>
        

    )
    
}