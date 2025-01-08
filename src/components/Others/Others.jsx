import style from './Others.module.css';
import img1 from '../../assets/1.jpg';
export default function Others() {
    return(
        <section className={style.Others}>
            <div className={style.degradado}></div>
            <h1>Others</h1>
            <div className={style.form1}>
                <img src= {img1}></img>
            </div>
            <div className={style.form2}>
                <div className={style.textContainer}>
                    <h2>Modern Style.</h2>
                    <p>
                    The modernist movement began to take shape when it shifted away from traditional construction and design elements such as wood, stone, and brick and toward industrial materials like as glass, steel, and concrete.                </p>
                </div>
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