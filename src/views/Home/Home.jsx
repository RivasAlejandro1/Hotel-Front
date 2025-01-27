import Feedback from '../../components/Feedback/Feedback.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Header from '../../components/Header/Header'
import HeaderInfo from '../../components/HeaderInfo/HeaderInfo'
import Interest from '../../components/Interest/Interest.jsx'
import Mission from '../../components/Mission/Mission.jsx'
import Others from '../../components/Others/Others.jsx'
import RoomInfos from '../../components/RoomInfos/RoomInfos.jsx'
import Vision from '../../components/Vision/Vision.jsx'
import style from './Home.module.css'

export default function Home (e) {
    

    return(
        <div className={style.Header}>
            <Header></Header>
            <HeaderInfo></HeaderInfo>
            <RoomInfos></RoomInfos>
           {/*  <Feedback></Feedback> */}
            <Interest></Interest>
        </div>
        

    )
    
}