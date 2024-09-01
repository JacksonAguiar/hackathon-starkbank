import { Sidebar } from "../../components/sidebar"
import styles from './styles.module.scss'

export const Card = () => {
    return (
        <div className={styles.card}>
            <Sidebar active={1} />


        </div>
    )
}