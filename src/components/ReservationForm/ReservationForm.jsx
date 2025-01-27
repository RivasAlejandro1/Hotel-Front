import style from './ReservationForm.module.css';
import { useForm } from 'react-hook-form';
import reserveAxios from '../RoomCard/ReserveAxios';
import { useState } from 'react';
export default function ReservationForm(e) {
    const {close, numbers = []} = e;
    const [NotUser, setNotUser] = useState(false);
    const [MakeReservation, setMakeReservation] = useState(false);

    //* Handle HTTPRequest
    const { register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = handleSubmit( async (data) => {
        const loggedIdUserJSON = localStorage.getItem('loggedIdAppUser')
        const userId = JSON.parse(loggedIdUserJSON);
        const {entryDate, departureDate,  RoomNumber } = data;


        if(userId){
            try {
                await reserveAxios({entryDate, departureDate, roomId: RoomNumber, userId });
                setMakeReservation(true)
            }catch(error){
                console.log(error)
            }
            setNotUser(false)
            
        }else {
            setNotUser(true)
        }

        

    })


    return(
        <form 
        onSubmit={onSubmit}
        className={
            style.ReservationForm/* 
            e.Apper ? 
            : style.LogInDisApper */
            }
        >
            <div className={style.InputsContainer}>
                <label
                    htmlFor='entryDate' 
                >Fecha de Entrada</label>
                    <input
                        type='date'
                        id="entryDate"
                        name="entryDate"
                        placeholder='Fecha de Entrada'
                        {...register("entryDate", {
                            required: {
                                value: true,
                                message: "Fecha Entrada Requerida"
                            },
                            /* pattern: {
                                value: emailRegex,
                                message: emailRegexMessage
                            }, */
                        })}
                    ></input>
            </div>
            {
                errors.entryDate ?  <span className={style.errors}>{errors.entryDate.message}</span> : <></>
            }


            <div className={style.InputsContainer}>
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
            </div>

            {
                errors.departureDate ?  <span className={style.errors}>{errors.departureDate.message}</span> : <></>
            }

            <div className={`${style.InputsContainer} ${style.InputContainerSelect}`}>
                <label
                    htmlFor='N°Habitación' 
                >N°Habitación</label>

                <select type='number'
                id="N°Habitación"
                name="N°Habitación"
                {...register("RoomNumber", {
                    required: {
                        value: true,
                        message: "N°Habitación Requerido"
                    },
                    /* pattern: {
                        value: emailRegex,
                        message: emailRegexMessage
                    }, */
                })}
                >   
                {
                numbers.map((number)=>(
                    <option value={number} key={number}>{number}</option>    
                ))}{/* 
                
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
                <option value="6">6</option> 
                
                
                <option value="7">7</option>  */}
                </select>
            </div>
                    
            {
                errors.RoomNumber ?  <span className={style.errors}>{errors.RoomNumber.message}</span> : <></>
            }

            <button 
                type='submit'
            className={style.buttonSubmit}>
                Reservar
            </button>
            {
                 NotUser ?  <span className={style.errors}>Debe iniciar sesión</span> : 
                 MakeReservation ? <span className={`${style.errors} ${style.AllGood}`}>Reservación hecha con Exito</span> : <></>
            }

            <button
                className={style.buttonClose} 
            onClick={(()=> close(false))}>
                X
            </button>

        </form>
    )
}