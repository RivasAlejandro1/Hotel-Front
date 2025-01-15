import ReservationCard from '../../components/ReservationCard/ReservationCard';
import style from './Reservations.module.css';

export default function Reservations (e) {
    

    return(
        <section className={style.Reservations}>
            <div className={style.shape}>
                <h1>Reservaciones</h1>
            </div>
            <div className={style.InfoContainer}>
                <div className={style.shape1}></div>
                <ReservationCard
                    title="Sencilla"
                    text="Cama Matrimonial y cama individual, baño privado, balcón."
                    number="1"
                    room="1"
                
                    DateEntry="2025-01-10"
                    DateOut="2025-01-11"
                    price="80"
                ></ReservationCard>
                <ReservationCard
                    title="Familiar"
                    text="Tres camas matrimoniales y una litera, baño privado, balcón con
                vista al mar."
                    number="3"
                    price="200"
                    room="4"
                    DateEntry="2025-01-11"
                    DateOut="2025-01-12"
                ></ReservationCard>
            </div>
        </section>
        

    )
    
}