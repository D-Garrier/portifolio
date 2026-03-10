import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.contactInfo}>
                <p><strong>Telefone:</strong> (21) 99673-8316</p>
                <p><strong>Endereço:</strong> Valinhos, SP </p>
                <p><strong>Email:</strong> diogogarrier@hotmail.com</p>
            </div>
            <ul>
                <li><a href='https://www.instagram.com/diogogarrier/'><FaInstagram size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/diogo-garrier-9938b9185/'><FaLinkedin size={30} /></a></li>
            </ul>
            <p className={styles.copy}>Diogo Garrier © 2026</p>
        </div>
    )
}

export default Footer