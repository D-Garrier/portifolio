import styles from './Skills.module.css'
import javascrip from '../../Image/Skills/javascript.svg'
import html from '../../Image/Skills/html.svg'
import css from '../../Image/Skills/css.svg'
import typescript from '../../Image/Skills/typescript.svg'
import react from '../../Image/Skills/react.svg'

function Skills (){
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={javascrip}/>
                <img src={html}/>
                <img src={css}/>
                <img src={typescript}/>
                <img src={react}/>
            </div>
        </div>
    )
}

export default Skills