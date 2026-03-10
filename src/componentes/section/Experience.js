import styles from './Experience.module.css'

function Experience() {
    return (
        <div className={styles.experience} id="Experience">
            <h1>Experiência Profissional</h1>
            <div className={styles.timeline}>
                <div className={styles.job}>
                    <h3>Supervisor de Marcenaria</h3>
                    <h4>FORM Móveis Planejados</h4>
                    <span>jan de 2026 - o momento | Valinhos, SP</span>
                    <p>Supervisão de produção e equipe. Ferramentas: Dinabox, SketchUp, entre outras.</p>
                </div>

                <div className={styles.job}>
                    <h3>Projetista Executivo (Freelance)</h3>
                    <h4>Garrier Project Solutions</h4>
                    <span>jan de 2024 - o momento | Muriaé, MG (Remoto)</span>
                    <p>Elaboração de projetos técnicos para produção, com ajuste de ferragens, acabamentos e criação de pranchas executivas. Responsável por alinhar os pontos críticos com arquitetos, além de gerar planos de corte, etiquetas e Gcode. Softwares: Promob, SketchUp, etc.</p>
                </div>

                <div className={styles.job}>
                    <h3>Marceneiro</h3>
                    <h4>EJS Marcenaria</h4>
                    <span>set de 2023 - mai de 2024</span>
                    <p>Atuação como marceneiro e projetista executivo na produção e montagem de móveis sob medida.</p>
                </div>

                <div className={styles.job}>
                    <h3>Projetista Executivo</h3>
                    <h4>Medina Moveis Planejados</h4>
                    <span>jun de 2023 - mar de 2024 | Campinas, SP</span>
                    <p>Elaboração de projetos e soluções de mobiliário utilizando o Promob.</p>
                </div>

                <div className={styles.job}>
                    <h3>Gerente de Produção / Marceneiro</h3>
                    <h4>EJS Marcenaria (Terceirizado)</h4>
                    <span>mar de 2020 - jun de 2023</span>
                    <p>Forte experiência prática na execução de marcenaria e gerência de toda a etapa de produção da marcenaria.</p>
                </div>

                <div className={styles.job}>
                    <h3>Sócio Proprietário</h3>
                    <h4>Garrier Móveis Planejados</h4>
                    <span>set de 2020 - jun de 2023 | Duque de Caxias, RJ</span>
                    <p>Gestão de negócios, atendimento direto ao cliente, montagem, acabamento e elaboração de projetos em SketchUp e marcenaria geral.</p>
                </div>

                <div className={styles.job}>
                    <h3>Marceneiro</h3>
                    <h4>Pereira Lopes Marcenaria Corporativa (Temporário)</h4>
                    <span>jun de 2019 - set de 2019 | Rio de Janeiro, Brasil</span>
                    <p>Atuação focada em marcenaria corporativa.</p>
                </div>

                <div className={styles.job}>
                    <h3>Montador de Móveis Planejados</h3>
                    <h4>Predilecta Móveis</h4>
                    <span>jun de 2017 - mai de 2019 | Rio de Janeiro, Brasil</span>
                    <p>Montagem profissional de móveis planejados em marcenaria.</p>
                </div>
            </div>
        </div>
    )
}

export default Experience
