import { ReactElement, useEffect, useState } from "react";
import { Sidebar } from "../../components/sidebar";
import styles from "./styles.module.scss";
import axios from "axios";
import { Loading } from "../../components/loading";
import { Parameters } from "../../components/parameters";
import { InfoModal } from "../../components/modal";

const bullets = [
    {
        title: "Análise de Fluxo de Caixa Futuro",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. ",
    },
    {
        title: "Identificação de Áreas de Alto Custo por Departamento",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. ",
    },
    {
        title: "Análise de Eficiência das Despesas Corporativas",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. ",
    },
    {
        title: "Comparação entre Receitas e Despesas",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae tempus diam. Nunc vehicula dui sed sem finibus, quis sollicitudin mauris porta. In nisl magna, posuere vel facilisis eu, mollis nec erat. ",
    },
];

const checkup = {
    status: "Negativo",
    text: "Lorem ipsum",
};

export const Home = () => {
    const [data, setData] = useState<string[]>();
    const [enterParameters, setEnterParameters] = useState<boolean>(true);
    const [parameters, setParameters] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [modalOpened, setModalOpened] = useState(false)
    const [actualModal, setActualModal] = useState([])

    const submitParameters = async () => {
        setLoading(true);
        const response = await axios.post("http://localhost:3000/analyse", {
            parameters,
        });
        setData(response.data);
        setLoading(false);
        setEnterParameters(false);
    };

    useEffect(() => {
        // const getData = async () => {
        //   const cache = localStorage.getItem("data");
        //   if (cache) {
        //     setData(JSON.parse(cache.replace(/\*/g, "")));
        //   } else {
        //     const response = await axios.get("http://localhost:3000/analyse");
        //     if (response.data) {
        //       localStorage.setItem("data", JSON.stringify(response.data));
        //     }
        //   }
        // };
        // getData();
    }, []);

    const moreInfo = (data: any): ReactElement => {
        return (
            <div>
                <h3>{data.title}</h3>
                <div className={styles.description}>{data.description}</div>
            </div>
        )
    }

    const handleOpenModal = (bullet: any, data: any) => {
        const newData = {...bullet, description: data}
        setActualModal(newData)
        setModalOpened(true)
    }

    const handleCloseModal = () => {
        setActualModal([])
        setModalOpened(false)
    }

    return (
        <div className={styles.home}>
            <Sidebar active={0} />
            {enterParameters ? (
                <div className={styles.parameters}>
                    {!loading && <Parameters setParameters={setParameters} />}

                    {loading ? (
                        <Loading />
                    ) : (
                        <button className={styles.submitButton} onClick={submitParameters}>
                            <span className={styles.box}>Analisar</span>
                        </button>
                    )}
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={styles.title}>
                        <span className={styles.divider}></span>
                        <h2>Análise</h2>
                        <span className={styles.divider}></span>
                    </div>

                    <center>01/03/2024 - 01/09/2024</center>

                    <div className={styles.bullets}>
                        {data &&
                            bullets.map((bullet, index) => {
                                return (
                                    <div className={styles.bulletContainer} key={index} onClick={() => handleOpenModal(bullet, data[index])}>
                                        <div className={styles.styledBar}></div>
                                        <div className={styles.bullet}>
                                            <h3>{bullet.title}</h3>
                                            <div className={styles.description}>{data[index]}</div>
                                            {/* <span>{bullet.description}</span> */}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                    {data ? (
                        <div className={styles.result}>
                            <div className={styles.warning}>
                                <h3>Pontos de Atenção</h3>
                                <span>{data[4]}</span>
                            </div>

                            <div
                                className={`${styles.checkup} ${checkup.status != "Positivo" && styles.danger
                                    }`}
                            >
                                <span className={styles.tag}>Checkup</span>
                                <h3>{checkup.status.toUpperCase()}</h3>
                                <span>{data[5].replace("Negativo", "")}</span>
                                {/* <span>{checkup.text}</span> */}
                            </div>
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            )}

            {modalOpened && <InfoModal children={moreInfo(actualModal) } onClose={() => handleCloseModal()} />}
        </div>
    );
};
