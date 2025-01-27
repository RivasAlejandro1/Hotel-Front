import { useEffect, useState } from 'react';
import ReservationForm from '../ReservationForm/ReservationForm';
import UnitReservation from '../UnitReservation/UnitReservation';
import style from './ReservationList.module.css';
import { getAllReservationsAxios } from './getAllReservationsAxios';
import { cancelReservationAxios } from './cancelReservationAxios';
export default function ReservationList() {
    //* Handle AllReservations 
    const [allReservations, SetAllReservations] = useState([])
    const [reloadThePage, setReloadThePage] = useState([]);
        
    //* Handle LoadedingHTTPRequest
    useEffect( ()=>{
        const Fetch = async()=>{
            try {
                const FindedAllReservations = await getAllReservationsAxios();
                SetAllReservations(FindedAllReservations)
    
            }catch(error){
                console.log(error.response.data.error)
            }

        }

        Fetch();
    

    },[reloadThePage])

    //* Handle CancelReservationRequest
    const cancelReservation = async (id)=>{
        try{
            const response = await cancelReservationAxios(id);
            console.log(response);
            SetAllReservations(allReservations.filter( r => r.id != id));
        }catch(error){
            console.log(error.response.data.error)
        }
        
    }


    return(
        <section className={style.ReservationList}>
            
            <h2>Gestión de Reservaciónes</h2>

            <div className={style.ReservationContainer}>
                <ReservationForm setState={setReloadThePage} state={reloadThePage}></ReservationForm>
                <UnitReservation
                    idd="ID"
                    entryDate="Fecha de Entrada"
                    departureDate="Fecha de Salida"
                    paid="Pagado"
                    room="Habitacion"
                    type="Tipo"
                    user="Usuario"
                    columna = {true}
                ></UnitReservation>

                {
                    allReservations.map((reservation)=>(

                        <UnitReservation
                            key={`reservation_${reservation.id}`}
                            idd={reservation.id}
                            entryDate={reservation.entryDate}
                            departureDate={reservation.departureDate}
                            paid={reservation.paid ? "Pagado" : "Pendiente"}
                            room={reservation.room.numero}
                            type={reservation.room.tipo}
                            user={reservation.user.id}
                            onClick={()=>cancelReservation(reservation.id)}
                        ></UnitReservation>
                    ))
                }
              
                
                
                
                
                
                
            </div>
            
        </section>
    )
}       

