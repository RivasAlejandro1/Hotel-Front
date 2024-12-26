import style from './HeaderInfo.module.css'
import myImage from '../../helpers/line 19.png'; 
import image2 from '../../assets/2.jpg'; 
import image3 from '../../assets/3.jpg'; 
import image4 from '../../assets/4.jpg'; 
import image5 from '../../assets/5.jpg'; 
import image6 from '../../assets/6.jpg'; 
import image7 from '../../assets/7.jpg'; 
import image8 from '../../assets/8.jpg'; 
import image9 from '../../assets/9.jpg'; 
import image10 from '../../assets/10.jpg'; 
import image11 from '../../assets/11.jpg'; 
import image12 from '../../assets/12.jpg'; 
import image13 from '../../assets/13.jpg'; 
import image14 from '../../assets/14.jpg'; 
import image15 from '../../assets/15.jpg'; 
import image16 from '../../assets/16.jpg'; 
import image17 from '../../assets/17.jpg'; 
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
                    <span>24</span>
                    <p>Years of experience</p>
                </div>
               <div className={`${style.text} ${style.text_2}`}>
                    <span>162</span>
                    <p>Projects completed</p>
                </div>
                <div className={`${style.littleForm} ${style.littleForm_2}`}>

                    <p>Make your dream home.</p>
                    <input
                         placeholder='Your email address'
                    ></input>
                    <button>Let´s Chat</button>
                </div>

        </div>
    )
}