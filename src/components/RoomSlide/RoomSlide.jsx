import style from './RoomSlide.module.css'
import vector from '../../assets/vectors/Vector5.png'
import vectorShadow from '../../assets/vectors/Vector5sombra.png'



export default function RoomSlide ({ 
        img ,
        shadow ,
        t2 = "Smooth workflow", 
        p = "We deliver the final work with great professional way."
    }){
 
    const vectorChoose = img? img : vector;
    const vectorShadowChoose = shadow? shadow : vectorShadow;
    return(
        <article className={style.article}>
            <div>
                <img
                    src={vectorShadowChoose}
                    className={style.vectorShadow}
                    ></img>
                <img
                    className={style.vector}
                    src={vectorChoose}
                ></img>
            </div>
            <h2>{t2}</h2>
            <p>{p}</p>
        </article>
    )
}