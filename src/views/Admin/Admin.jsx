import ReservationList from '../../components/Admin/ReservationList/ReservationList'
import RoomsAvailable from '../../components/Admin/RoomsAvailable/RoomsAvailable'
import UserList from '../../components/Admin/UserList/UserList'
import style from './Admin.module.css'

export default function Admin (e) {
    

    return(
        <div className={style.Admin}>
            <RoomsAvailable></RoomsAvailable>
            <UserList></UserList>
            <ReservationList></ReservationList>
        </div>
        

    )
    
}