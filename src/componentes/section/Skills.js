import styles from './Skills.module.css'

function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Habilidades Profissionais</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos técnicos na área.</p>
            <div className={styles.skillList}>
                <div className={styles.skillItem}>
                    <h3>Projetos Executivos</h3>
                    <p>Pacote técnico completo: medição no local, plano de corte e preparação para produção.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Softwares</h3>
                    <p>Promob, Dinabox, SketchUp.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Instalação e Montagem</h3>
                    <p>Instalação na casa do cliente, manuseio preciso de ferramentas e acabamento fino.</p>
                </div>
                <div className={styles.skillItem}>
                    <h3>Gestão e Comunicação</h3>
                    <p>Atendimento direto a lojas e clientes finais, comunicação eficaz e solução de problemas em obra.</p>
                </div>
            </div>
        </div>
    )
}

export default Skills