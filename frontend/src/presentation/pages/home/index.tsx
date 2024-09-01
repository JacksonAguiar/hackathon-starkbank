import { useEffect, useState } from "react"
import { Sidebar } from "../../components/sidebar"
import styles from './styles.module.scss'
import axios from "axios"
import { Loading } from "../../components/loading"

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

// const data = [
// "**Análise do Fluxo de Caixa**\n\n**Tendências Observadas:**\n\n* **Aumento do Fluxo de Caixa Operacional:** O fluxo de caixa operacional tem aumentado consistentemente nos últimos meses, indicando uma melhora na lucratividade e eficiência operacional.\n* **Diminuição do Fluxo de Caixa de Investimento:** O fluxo de caixa de investimento tem diminuído, sugerindo que a empresa está reduzindo seus gastos de capital ou investindo menos em novos projetos.\n* **Aumento do Fluxo de Caixa de Financiamento:** O fluxo de caixa de financiamento tem aumentado, indicando que a empresa está recorrendo a fontes externas de financiamento, como empréstimos ou emissão de ações.\n* **Saldo de Caixa Crescente:** O saldo de caixa da empresa tem aumentado, o que fornece um colchão financeiro para cobrir despesas inesperadas ou oportunidades de investimento.\n\n**Implicações:**\n\n* **Melhoria da Saúde Financeira:** O aumento do fluxo de caixa operacional e o saldo de caixa crescente indicam que a empresa está em uma posição financeira mais forte.\n* **Otimização de Custos:** A diminuição do fluxo de caixa de investimento sugere que a empresa está otimizando seus custos e se concentrando em projetos de maior retorno.\n* **Necessidade de Monitoramento:** O aumento do fluxo de caixa de financiamento deve ser monitorado de perto para garantir que a empresa não esteja assumindo dívidas excessivas.\n* **Oportunidades de Crescimento:** O saldo de caixa crescente fornece à empresa flexibilidade para investir em novas oportunidades de crescimento ou expandir suas operações.",
// "A análise das despesas corporativas revela um padrão de gastos elevados em serviços de hospedagem, com um volume significativo de transações negadas. Os gastos com serviços de hospedagem representam a maior parcela das despesas, com um total de R$ 3.000,00 em transações negadas. Além disso, há um volume considerável de gastos com serviços de nuvem, com um total de R$ 1.863.137,00 em transações negadas. Esses gastos estão acima do orçamento previsto, indicando a necessidade de uma revisão das políticas de gastos e uma investigação das razões para as transações negadas.",
// "A análise do saldo entre entradas e saídas de caixa no período definido indica que a empresa está gerando caixa suficiente para cobrir suas despesas. No entanto, há uma tendência de fluxo de caixa negativo, com as saídas superando as entradas nos últimos meses. Isso sugere que a empresa pode precisar tomar medidas para aumentar as entradas de caixa ou reduzir as saídas para manter um fluxo de caixa positivo a longo prazo.",
// "Os departamentos com maiores despesas são:\n\n* **Serviços:** R$ 17.220.167\n* **Varejo:** R$ 16.912.162\n* **Hotéis:** R$ 13.266.920\n\nOs departamentos que geram mais receita são:\n\n* **Serviços:** R$ 24.059.621\n* **Varejo:** R$ 23.464.894\n* **Hotéis:** R$ 19.890.210\n\nPara equilibrar os custos e aumentar a eficiência em departamentos de alto custo, sugere-se:\n\n* **Serviços:** Negociar descontos com fornecedores, otimizar processos e reduzir gastos desnecessários.\n* **Varejo:** Analisar o mix de produtos, otimizar o estoque e melhorar as estratégias de marketing.\n* **Hotéis:** Aumentar a ocupação, otimizar as tarifas e reduzir custos operacionais.",
// "Os dados corporativos de compras indicam uma tendência preocupante de transações negadas, o que pode prejudicar o faturamento e a saúde financeira da empresa. Vários pagamentos foram recusados por motivos não especificados, incluindo compras de hotéis, serviços e varejo. Além disso, há um número significativo de faturas pendentes, o que pode levar a atrasos nos pagamentos e afetar o fluxo de caixa da empresa. É essencial investigar as causas dessas transações negadas e tomar medidas para resolvê-las, a fim de evitar mais perdas de receita e garantir a estabilidade financeira da empresa.",
//     "**Negativo**\n\nOs dados fornecidos indicam um padrão de transações negadas, o que sugere problemas financeiros ou de crédito. As transações negadas podem resultar em taxas e multas, prejudicando ainda mais a situação financeira da empresa. Além disso, a falta de transações confirmadas pode indicar uma diminuição na atividade comercial, o que pode levar a uma queda nas receitas e lucros."
// ]

export const Home = () => {
    const [data, setData] = useState<any>()

    useEffect(() => {
        const getData = async () => {
            const cache = localStorage.getItem("data")

            if (cache) {
                setData(JSON.parse(cache.replace(/\*/g, "")))
            }
            else {
                const response = await axios.get("http://localhost:3000/analyse")

                if (response.data) {
                    localStorage.setItem("data", JSON.stringify(response.data))
                }
            }

        }

        getData()
        console.log(data)
    }, [])

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
                        data && bullets.map((bullet, index) => {
                            return (
                                <div className={styles.bulletContainer} key={index}>
                                    <div className={styles.styledBar}></div>
                                    <div className={styles.bullet}>
                                        <h3>{bullet.title}</h3>
                                        <div className={styles.description}>
                                            {data[index]}
                                        </div>
                                        {/* <span>{bullet.description}</span> */}
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>

                {
                    data ? (
                        <div className={styles.result}>
                            <div className={styles.warning}>
                                <h3>Pontos de Atenção</h3>
                                <span>{data[4]}</span>
                            </div>

                            <div className={`${styles.checkup} ${checkup.status != 'Positivo' && styles.danger}`}>
                                <span className={styles.tag}>Checkup</span>
                                <h3>{checkup.status.toUpperCase()}</h3>
                                <span>{data[5].replace('Negativo', '')}</span>
                                {/* <span>{checkup.text}</span> */}
                            </div>
                        </div>
                    )
                        :
                        <Loading />

                }
            </div>
        </div>
    )
}