import { CircularProgress } from '@mui/material'
import styles from './styles.module.scss'

export const Loading = () => {
    return (
        <div className={styles.loadingWrap}>
            <CircularProgress className={styles.loading} color="inherit" size={60} />
            <div className={styles.loadingText}>
                <span>C</span>
                <span>a</span>
                <span>r</span>
                <span>r</span>
                <span>e</span>
                <span>g</span>
                <span>a</span>
                <span>n</span>
                <span>d</span>
                <span>o</span>
            </div>
        </div>
    )
}