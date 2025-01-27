import style from './Footer.module.css'
export default function Footer (e) {

    return(
        <footer className={style.Footer}>
          {/*   <div className={style.contentContainer}>
                <div className={`${style.column} ${style.firstColumn}`}>
                    <span>Icon</span>
                    <p>Interiorfirm is an acclaimed multidisciplinary studio specializing in interior architecture, interior design.</p>
                </div>
                <div className={`${style.column} ${style.secondColumn}`}>
                    <span className={style.subtittle}>Company</span>
                    <span>Company</span>
                    <span>Company</span>
                    <span>Company</span>
                    <span>Company</span>
                    <span>Company</span>
                </div>
                <div className={`${style.column} ${style.secondColumn}`}>
                    <span className={style.subtittle}>Design</span>
                    <span>Design</span>
                    <span>Design</span>
                    <span>Design</span>
                    <span>Design</span>
                    <span>Design</span>
                </div>
                <div className={`${style.column} ${style.secondColumn}`}>
                    <span className={style.subtittle}>Links</span>
                    <span>Links</span>
                    <span>Links</span>
                    <span>Links</span>
                    <span>Links</span>
                    <span>Links</span>
                </div>
                <div className={`${style.column} ${style.secondColumn}`}>
                    <span className={style.subtittle}>Material</span>
                    <span>Material</span>
                    <span>Material</span>
                    <span>Material</span>
                    <span>Material</span>
                    <span>Material</span>
                </div>
            </div> */}
            <div className={style.border}></div>
            <div className={style.copyright}>
                <span>© Copyright 2021 Interiorfirm ― All Rights Reserved.</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
            </div>
        </footer>
    )
}