import { Sidebar } from "../../components/sidebar"
import { TableComponent } from "../../components/table"
import styles from './styles.module.scss'

const data = [
    {
        id: 1,
        status: "pago",
        amount: 1000,
        due: "02/01/2024",
        name: "Carlos Almeida",
    },
    {
        id: 2,
        status: "recebido",
        amount: 1000,
        due: "16/07/2024",
        name: "Michael H.",
    },
    {
        id: 3,
        status: "recebido",
        amount: 1000,
        due: "21/08/2024",
        name: "Norma Queiroz",
    },
]

export const Invoice = () => {

    return (
        <div className={styles.invoice}>
            <Sidebar active={3} />

            <div className={styles.container}>
                <TableComponent data={data}/>
            </div>
        </div>
    )
}