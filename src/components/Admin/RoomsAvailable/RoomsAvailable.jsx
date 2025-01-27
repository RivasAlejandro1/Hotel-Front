import { useForm } from 'react-hook-form';
import UnitRoom from '../UnitRoom/UnitRoom';
import style from './RoomsAvailable.module.css';
import {getRoomsAvailableAxios,/* getAllRoomsAvailableAxios */} from './RoomsAvaibleAxios';
import { useState } from 'react';
export default function RoomsAvailable() {
    //* Handle RoomsAvaible
    const [allRooms, SetAllRooms] = useState({
        allAvailableRooms: [],
        allUnavailableRooms: []
    })

    //* Handle HTTPRequest
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit( async (data) => {
        const { entryDate, departureDate } = data;

        try {
            const FindedAllRooms = await getRoomsAvailableAxios({
                entryDate,
                departureDate
            });
            SetAllRooms({
                allAvailableRooms: FindedAllRooms[0],
                allUnavailableRooms: FindedAllRooms[1]
            })
            console.log("Look: ", {
                allAvailableRooms: FindedAllRooms[0],
                allUnavailableRooms: FindedAllRooms[1]
            })

        }catch(error){
            console.log(error)
        }
    })
    



    return(
        <section className={style.RoomsAvailable}>
            
            <h2>Busqueda de Habitaciones Ocupadas</h2>

            <div className={style.RoomsAvailableContainer}>
                <form className={style.formDate} onSubmit={onSubmit}>
                    <label
                        htmlFor='entryDate' 
                    >Fecha de Salida</label>
                    <input
                        type='date'
                        id="entryDate"
                        name="entryDate"
                        placeholder='Fecha de Entrada'
                        {...register("entryDate", {
                            required: {
                                value: true,
                                message: "Fecha Salida Requerida"
                            }
                        })}
                    ></input>
                    <label
                        htmlFor='departureDate' 
                    >Fecha de Salida</label>
                    <input
                        type='date'
                        id="departureDate"
                        name="departureDate"
                        placeholder='Fecha de Salida'
                        {...register("departureDate", {
                            required: {
                                value: true,
                                message: "Fecha Salida Requerida"
                            },
                            /* pattern: {
                                value: emailRegex,
                                message: emailRegexMessage
                            }, */
                        })}
                    ></input>
                    <button type="submit">Buscar</button>
                </form>
                <div className={style.Info1}>
                    <div className={style.InfoTitle}><p>Disponibles</p></div>
                    {   
                        allRooms.allAvailableRooms.map( (room) =>(
                            <UnitRoom number={`N°${room.numero}`} key={`N°${room.numero}`} type={room.tipo}></UnitRoom>
                        ))
                    }

                </div>
                <div className={style.Info2}> 
                    <div className={style.InfoTitle}><p>Ocupados</p></div>
                    {   
                        allRooms.allUnavailableRooms.map( (room) =>(
                            <UnitRoom number={`N°${room.numero}`} key={`N°${room.numero}`} type={room.tipo}></UnitRoom>
                        ))
                    }
                </div>

            </div>
            
        </section>
    )
}

