import { Link } from 'react-router-dom';
import styles from './NavButton.module.css';

export default function NavButton (p){
    return (
        <li className={styles.li}>
        <Link to={p.path} className={styles.link}>
            {p.name}        
        </Link>
        </li>
    )
}