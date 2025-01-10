import style from './Header.module.css'
import myImage from '../../helpers/line 19.png'; 
import firstImage from '../../assets/1.jpg'; 
export default function Header (e) {

    return(
        <div className={style.Header}>
                <div className={style.form1}>
                    <div className={style.textContainer}>
                        <h1 className={style.h1}>
                        Posada Torremar 
                        </h1>
                        <p className={style.text}>
                        Posada Torremar se
caracteriza por ofrecer la más atenta, esmerada y personalizada atención con unas
instalaciones modernas y confortables, cónsonas con el ambiente natural que las
rodea.                        </p>
                        
                        <div className={style.buttonContainer}>
                            <button className={style.button}>Reservar</button>
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