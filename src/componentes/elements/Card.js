import styles from './Card.module.css'
import { useState } from 'react'

function Card({ img, title, tech, description }) {

    const [info, setInfo] = useState(false)

    function InfoOn() {
        setInfo(true)
    }

    function InfoOff() {
        setInfo(false)
    }

    return (
        <div onMouseLeave={InfoOff} className={styles.card}>
            <div onMouseEnter={InfoOn}>
                <img src={img} alt='Projeto de Marcenaria' />
            </div>

            {info === true && (
                <section>
                    <h3>{title}</h3>
                    <p><strong>Detalhes:</strong> {tech}</p>
                    <p>{description}</p>
                </section>
            )}
        </div>
    )
}

export default Card