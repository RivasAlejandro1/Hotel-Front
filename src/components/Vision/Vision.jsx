import style from './Vision.module.css';
import img1 from '../../assets/5.jpg';
import img2 from '../../assets/15.jpg';
export default function Vision() {
    return(
        <article className={style.vision}>
            <h1>Visión</h1>
            <div className={style.form1}>
                <img src= {img1} alt="Foto Alberca"></img>
            </div>
            <div className={style.form2}>
                <img src={img2} alt="Foto Sala de estar"></img>
            </div>
            <div className={style.form3} title='shape3'>
                <p>Convertirse en la posada turística familiar de playa colorada por excelencia y ser
                ampliamente reconocidos en la zona, no solo por sus instalaciones, sino también
                por contar con la más alta calidad de servicio, además de una razonable relación
                calidad-precio y un inigualable servicio personalizado para sus huéspedes.</p>
                {/* <div className={style.buttonContainer}>
                    <button  className={style.button}>
                        About Us
                    </button>

                </div> */}
                {/*                 <img src={arrow} className={style.imgArrow}></img> */}  
      </div>
        </article>
    )
}