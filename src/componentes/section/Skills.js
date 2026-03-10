import styles from './Skills.module.css'

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades Profissionais</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos técnicos na área.</p>
            <div className={styles.skillList}>
                <div className={styles.skillItem}>
                    <h3>Projetos Executivos</h3>
                    <p>Criação técnica, plano de corte, e preparação para produção.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Softwares</h3>
                    <p>Promob, SketchUp, Dinabox.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Marcenaria Prática</h3>
                    <p>Manuseio preciso de ferramentas manuais e elétricas, montagem e acabamento fino.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Gestão e Comunicação</h3>
                    <p>Supervisão de produção sustentável, facilidade em solucionar problemas e comunicação interpessoal eficaz.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills