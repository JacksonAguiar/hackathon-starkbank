import { Sidebar } from "../../components/sidebar"
import styles from './styles.module.scss'

const bullets = [
    {
        title: "Análise de Fluxo de Caixa Futuro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. "
    },
    {
        title: "Identificação de Áreas de Alto Custo por Departamento",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. "
    },
    {
        title: "Análise de Eficiência das Despesas Corporativas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. "
    },
    {
        title: "Comparação entre Receitas e Despesas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. "
    },
]

const warning = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Ddsdfd asfasfa fafasffssaf fafasfaffssaf. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Ddsdfd asfasfa fafasffssaf fafasfaffssaf."
}

const checkup = {
    status: "Negativo",
    text: "Lorem ipsum"
}

export const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar active={0} />

            <div className={styles.container}>
                <div className={styles.title}>
                    <span className={styles.divider}></span>
                    <h2>Análise</h2>
                    <span className={styles.divider}></span>
                </div>

                <div className={styles.bullets}>
                    {
                        bullets.map((bullet, index) => {
                            return (
                                <div className={styles.bulletContainer}>
                                    <div className={styles.styledBar}></div>
                                    <div className={styles.bullet} key={index}>
                                        <h3>{bullet.title}</h3>
                                        <span>{bullet.description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

                <div className={styles.result}>
                    <div className={styles.warning}>
                        <h3>Pontos de Atenção</h3>
                        <span>{warning.text}</span>
                    </div>

                    <div className={`${styles.checkup} ${checkup.status != 'Positivo' && styles.danger}`}>
                        <span className={styles.tag}>Checkup</span>
                        <h3>{checkup.status.toUpperCase()}</h3>
                        <span>{checkup.text}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}