import style from './Interest.module.css';
import img1 from '../../assets/1.jpg';
import myImage from '../../helpers/line 19.png'; 
import telefonoIMG from '../../assets/redes/telefono.png'; 
import instagramIMG from '../../assets/redes/instagram.png'; 
import whatssapIMG from '../../assets/redes/whatsapp.png'; 
export default function Interest() {
    return(
        <section className={style.Interest}>
            <div className={style.form1}>
                <img src= {img1}></img>
            </div>
            <div className={style.textContainer}>
                <h1>Contactanos</h1>
                
                <div className={style.redesIcons}>
                    <div>
                        <img src={telefonoIMG}></img>
                        <p>+14 11111111</p>
                    </div>
                    <img src={instagramIMG}></img>
                    <img src={whatssapIMG}></img>
                    
                    
                </div>
                
              {/*   <div className={style.buttonContainer}>
                    <button  className={style.button}>
                        Explore
                    </button>
                    <img src={myImage}></img>

                </div> */}
            </div>
        </section>
    )
}