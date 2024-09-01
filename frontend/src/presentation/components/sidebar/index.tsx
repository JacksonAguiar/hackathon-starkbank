import { FC } from "react"
import { Link } from "react-router-dom"

import styles from './styles.module.scss'

type Props = {
    active: number
}

const navigation = [
    {
        title: "Visão Geral",
        url: "/"
    },
    {
        title: "Cartão",
        url: "/card"
    },
    {
        title: "Pagamentos",
        url: "/payment"
    },
    {
        title: "Recebimentos",
        url: "/invoice"
    }
]

export const Sidebar: FC<Props> = ({ active }: Props) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.items}>
                {
                    navigation.map((nav, index) => {
                        return <Link to={nav.url} className={`${active == index && styles.active} ${styles.item}`} key={index}>
                            {nav.title}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}