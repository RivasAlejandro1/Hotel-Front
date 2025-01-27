import Feedback from '../../components/Feedback/Feedback.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Interest from '../../components/Interest/Interest.jsx'
import Mission from '../../components/Mission/Mission.jsx'
import Others from '../../components/Others/Others.jsx'
import Vision from '../../components/Vision/Vision.jsx'
import style from './WhoAreWe.module.css'

export default function WhoAreWe (e) {
    

    return(
        <div className={style.WhoAreWe}>
            <Vision></Vision>
            <Mission></Mission>
            <Interest></Interest>
        </div>
        

    )
    
}