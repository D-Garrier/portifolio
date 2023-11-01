import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'

function Projects(){
    return (
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title="lP - DNC"
            tech="HTML, CSS e JS"
            description="Desenvolvimento de uma Landing Page" 
            repo="https://github.com/D-Garrier/Landing-Page-CCXP" 
            site=""
            />
        </div>
    )
}

export default Projects