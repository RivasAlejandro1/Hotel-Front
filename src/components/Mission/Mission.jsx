import style from './Mission.module.css';
import img1 from '../../assets/14.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/7.jpg';
import img4 from '../../assets/12.jpg';
export default function Mission () {
    return(
        <section className={style.Mission}>
            <h1>Misión</h1>

            <div className={style.form1}>
                <img className={`${style.backgroundImg}  ${style.backgroundImg_1}`} src= {img1}></img>
            </div>
            <div className={style.form2}>
                <img className={`${style.backgroundImg}  ${style.backgroundImg_2}`} src= {img2}></img>
            </div>

            <div className={style.form3}>
{/*                 <img className={`${style.AboveImg}  ${style.AboveImg_1}`} src= {img3}></img>
 */}            </div>
            <div className={style.form4}>
{/*                 <img className={`${style.AboveImg}  ${style.AboveImg_2}`} src= {img4}></img>
 */}            </div>

            <p>
La posada Torremar, es una familia dedicada a ofrecer una experiencia
relajante y memorable para sus huéspedes en un entorno costero único. Ofrecen un
cómodo y acogedor alojamiento, además de servicios excepcionales que superan
las expectativas de sus huéspedes. Su objetivo es crear un ambiente tranquilo y
sereno para que los huéspedes puedan disfrutar del entorno costero. 
<br/>
<br/>

Se dedican a
proporcionar a los huéspedes una escapada amena que les permita salir de la rutina
y conectar con la naturaleza. Están comprometidos a ser respetuosos con el medio
ambiente y a promover prácticas sostenibles en todas sus operaciones.            </p>
        </section>
    )
}