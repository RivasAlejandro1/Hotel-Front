import { useForm } from 'react-hook-form';
import style from './ReservationForm.module.css';
import { modifeReservationAxios } from './modifeReservationAxios';
import { useState } from 'react';
export default function ReservationForm(e) {
    const { setState } = e;
    //* Handle ResultResponse
    const [resultMessage, setResultMessage] = useState("");


    //* Handle ModifeForm
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit( async (data) => {
        const { entryDate2, departureDate2, paid, roomId, IDReservation } = data;

        try {
            console.log("data", data)
            console.log("Body:", { 
                entryDate: entryDate2,
                departureDate: departureDate2,
                paid,
                roomId 
            })
            const response = await modifeReservationAxios({
                id: IDReservation,
                entryDate: entryDate2,
                departureDate: departureDate2,
                paid,
                roomId 
            });
            console.log(response);
            setResultMessage("El cambio en la reservación se ha realizado exitosamente");
            setState([]);

        }catch(error){
            console.log(error.response.message.error)
            setResultMessage(error.response.message.error);
        }
    })


    return(
            <form className={style.formDate} onSubmit={onSubmit}>
                <h3> Modificar Reservación</h3>

                <div className={`${style.InputContainer} ${style.FirstInputContainer} `}>
                     <label
                        htmlFor='IDReservation' 
                    >Seleccionar Reservacion</label>
                    <input
                        type='text'
                        id="IDReservation"
                        name="IDReservation"
                        {...register("IDReservation", {
                            required: {
                                value: true,
                                message: "Seleccione alguna reservación"
                            }
                        })}
                    ></input>
                </div>


                
                <h3> Selecciona los cambios</h3>

                <div className={style.SearchContainer}>
                    <div className={style.InputContainer}>
                        <label
                            htmlFor='entryDate2' 
                        >Fecha de Entrada</label>
                        <input
                            type='date'
                            id="entryDate2"
                            name="entryDate2"
                            {...register("entryDate2")}
                        ></input>
                    </div>
                    
                    <div className={style.InputContainer}>
                        <label
                            htmlFor='departureDate2' 
                        >Fecha de Salida</label>
                        <input
                            type='date'
                            id="departureDate2"
                            name="departureDate2"
                            {...register("departureDate2")}
                        ></input>
                    </div>
                    
                    <div className={style.InputContainer}>
                        <label
                            htmlFor='roomId' 
                        >Habitación</label>
                        <input
                            type='text'
                            id="roomId"
                            name="roomId"
                            {...register("roomId")}
                        ></input>
                    </div>
                    
                    <div className={style.InputContainer}>
                        <label
                            htmlFor='paid' 
                        >Pagado</label>
                        <input
                            type='text'
                            id="paid"
                            name="paid"
                            {...register("paid")}
                        ></input>
                    </div>

                </div>

                <button className={style.buttonContainer}>Cambiar</button>
                {
                    resultMessage ? <span>{resultMessage}</span> : <></>
                }
            </form>
            
    )
}       

