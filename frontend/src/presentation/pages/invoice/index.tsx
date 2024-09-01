import { Sidebar } from "../../components/sidebar"
import { TableComponent } from "../../components/table"
import styles from './styles.module.scss'

const data = [
    {
        id: 1,
        status: "pago",
        amount: 1000,
        due: "2024-08-15",
        name: "Cliente A",
    },
    {
        id: 2,
        status: "pago",
        amount: 1000,
        due: "2024-08-15",
        name: "Cliente B",
    },
    {
        id: 3,
        status: "pago",
        amount: 1000,
        due: "2024-08-15",
        name: "Cliente C",
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