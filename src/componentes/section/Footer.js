import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/diogogarrier/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/diogogarrier/'><FaGithub size={30}/></a></li>
                <li><a href='https://github.com/diogogarrier/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>diogogarrier@hotmail.com</p>
            <p>Diogo Garrier © 2023</p>
        </div>
    )
}

export default Footer