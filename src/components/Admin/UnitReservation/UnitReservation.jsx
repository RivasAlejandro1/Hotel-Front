import style from './UnitReservation.module.css';
export default function UnitReservation(e) {


    return(
        <div className={
        `${e.columna ? style.UnitReservationAdmin : ""}
         ${style.UnitReservation}
        `
            }>
            <div className={`${style.text} ${style.id}`}><p>{e.idd}</p></div>
            <div className={`${style.text} ${style.user}`}><p>{e.user}</p></div>
            <div className={`${style.text} ${style.entryDate}`}><p>{e.entryDate}</p></div>
            <div className={`${style.text} ${style.departureDate  }`}><p>{e.departureDate }</p></div>
            <div className={`${style.text} ${style.paid}`}><p>{e.paid}</p></div>
            <div className={`${style.text} ${style.room}`}><p>{e.room}</p></div>
            <div className={`${style.text} ${style.type}`}><p>{e.type}</p></div>
            <button className={`${style.text} ${style.button}`} onClick={e.onClick}>Cancelar</button>
        </div>
    )
}