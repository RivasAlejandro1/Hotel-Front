import style from './Feedback.module.css';
import img1 from '../../assets/1.jpg';
export default function Feedback() {
    return(
        <section className={style.Feedback}>
            <h1>Our Customers
            Feedback.</h1>
            <div className={style.form1}>
                <img src= {img1}></img>
            </div>
            <div className={style.textContainer}>
                <h2>Jordyn Dorwart</h2>
                <p>
                “ Amaizing fast and reliable customer support! The team of willing to go mile for customer service! ” </p>
                <span>Jordyn Dorwart</span>
            </div>
        </section>
    )
}