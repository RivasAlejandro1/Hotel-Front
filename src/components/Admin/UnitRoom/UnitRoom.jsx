import style from './UnitRoom.module.css';
export default function UnitRoom(e) {
    return(
        <div className={style.UnitRoom}>
            <div className={style.Number}><p>{e.number}</p></div>
            <div className={style.Text}><p>{e.type}</p></div>
        </div>
    )
}