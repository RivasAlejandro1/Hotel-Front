import style from './Header.module.css'
import myImage from '../../helpers/line 19.png'; 
import firstImage from '../../assets/1.jpg'; 
export default function Header (e) {

    return(
        <div className={style.Header}>
                <div className={style.grid}></div>
                <div className={style.form1}>
                    <div className={style.textContainer}>
                        <h1 className={style.h1}>
                        Modern Interior
                        Design Service
                        </h1>
                        <p className={style.text}>
                        Interiorfirm is an acclaimed multidisciplinary studio specializing in interior architecture, interior design and décor that redefines laid-back luxury.
                        </p>
                        
                        <div className={style.buttonContainer}>
                            <button className={style.button}>Explore Now</button>
                            <img src={myImage}></img>
                        </div>
                    </div>
                </div>
                <div className={style.form2}>
                    <div className={style.image}>
                        <img
                            src={firstImage}
                        >
                        </img>
                    </div>
                </div>
        </div>
    )
}