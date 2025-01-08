import style from './Vision.module.css';
import img1 from '../../assets/5.jpg';
import img2 from '../../assets/15.jpg';
export default function Vision() {
    return(
        <section className={style.vision}>
            <div className={style.degradado}></div>
            <h1>Visión</h1>
            <div className={style.form1}>
                <img src= {img1}></img>
            </div>
            <div className={style.form2}>
                <img src={img2}></img>
            </div>
            <div className={style.form3}>
                <p>
                Convertirse en la posada turística familiar de playa colorada por excelencia y ser
                ampliamente reconocidos en la zona, no solo por sus instalaciones, sino también
                por contar con la más alta calidad de servicio, además de una razonable relación
                calidad-precio y un inigualable servicio personalizado para sus huéspedes.                </p>
                <div className={style.buttonContainer}>
                    <button  className={style.button}>
                        About Us
                    </button>

                </div>
{/*                 <img src={arrow} className={style.imgArrow}></img>
 */}        </div>
        </section>
    )
}