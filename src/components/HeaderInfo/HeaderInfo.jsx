import style from './HeaderInfo.module.css'
import image2 from '../../assets/2.jpg'; 
import image5 from '../../assets/5.jpg'; 
import image8 from '../../assets/8.jpg'; 
import image15 from '../../assets/15.jpg'; 
export default function HeaderInfo (e) {

    return(
        <div className={style.HeaderInfo}>
                <div className={`${style.oval} ${style.oval_1}`}>
                    <img src={image2}></img>
                </div>
               <div className={`${style.oval} ${style.oval_2}`}>
                    <img src={image15}></img>
                </div> 
               <div className={`${style.miniOval} ${style.miniOval_1}`}>
                    <img src={image8}></img>
                </div> 
               <div className={`${style.miniOval} ${style.miniOval_2}`}>
                    <img src={image5}></img>
                </div>
               <div className={`${style.text} ${style.text_1}`}>
                    <span>07</span>
                    <p>Años de Atención</p>
                </div>
               <div className={`${style.text} ${style.text_2}`}>
                    <span>07</span>
                    <p>Cantidad de Habitaciones</p>
                </div>
                <div className={`${style.littleForm} ${style.littleForm_2}`}>

                    <p>¿Preguntas? CONTACTANOS</p>
                    <input
                         placeholder='Your email address'
                    ></input>
                    <button>Let´s Chat</button>
                </div>

        </div>
    )
}