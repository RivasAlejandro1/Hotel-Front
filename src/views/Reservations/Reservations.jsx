import { useEffect, useState } from 'react';
import ReservationCard from '../../components/ReservationCard/ReservationCard';
import style from './Reservations.module.css';
import getAllUserReservertionAxios from './getAllUserReservertionAxios';

export default function Reservations () {
    const [allReservations, setAllReservations] = useState([]);

    const TextType = (type) =>{
        const TypeMessage = {
            Sencillo: "Cama Matrimonial y cama individual, baño privado, balcón.",
            Doble: "Cama Matrimonial y cama individual, baño privado, balcón.",
            Familiar: "Tres camas matrimoniales y una litera, baño privado, balcón con vista al mar."
        }

        if(type =="Sencillo")return TypeMessage.Sencillo
        if(type =="Doble")return TypeMessage.Doble
        if(type =="Familiar")return TypeMessage.Familiar
        return ""
    }


    useEffect(()=>{
        const loadedReservation = async () =>{
            const loggedIdUserJSON = localStorage.getItem('loggedIdAppUser')
            const id = JSON.parse(loggedIdUserJSON);
            const AllFindedReservations = await getAllUserReservertionAxios(id);
            setAllReservations(AllFindedReservations);
    
        }
        loadedReservation();
    },[])

    return(

        <section className={style.Reservations}>
            <div className={style.shape}>
                <h1>Reservaciones</h1>
            </div>
            <div className={style.InfoContainer}>
                <div className={style.shape1}></div>
                {
                    allReservations?.map((reservation)=>(
                        <ReservationCard
                            key={reservation.id}
                            title={reservation.room.tipo}
                            text= {TextType}
                            number={reservation.id}
                            room={reservation.room.numero}
                        
                            DateEntry={reservation.entryDate}
                            DateOut={reservation.entryDate}
                            price={reservation.room.precio}
                        ></ReservationCard>

                    ))
                }
                {
                    allReservations.length === 0 ?  
                    <div className={style.Nothing}><h2>No tiene Reservaciones</h2></div> 
                    : <></>
                }
            </div>
        </section>
        

    )
    
}