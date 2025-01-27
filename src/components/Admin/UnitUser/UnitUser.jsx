import style from './UnitUser.module.css';
export default function UnitUser(e) {


    return(
        <div className={
        `${e.columna ? style.UnitUserAdmin : ""}
         ${style.UnitUser}
        `
            }>
            <div className={`${style.text} ${style.name}`}><p>{e.name}</p></div>
            <div className={`${style.text} ${style.lastName}`}><p>{e.lastName}</p></div>
            <div className={`${style.text} ${style.cedula}`}><p>{e.cedula}</p></div>
            <div className={`${style.text} ${style.birhdate}`}><p>{e.birhdate}</p></div>
            <div className={`${style.text} ${style.email}`}><p>{e.email}</p></div>
            <div className={`${style.text} ${style.administrador}`}><p>{e.administrador}</p></div>
        </div>
    )
}