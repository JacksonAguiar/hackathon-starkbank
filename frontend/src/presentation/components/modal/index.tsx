import { FC } from "react";
import styles from './styles.module.scss'
import { Backdrop, Box, Modal } from "@mui/material";

type Props = {
    onClose: () => void,
    children: any
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    minHeight: 260,
    bgcolor: '#e6e6e6',
    border: '0',
    borderRadius: '4px',
    boxShadow: 24,
    py: '1rem',
    p: '2rem'
}

export const InfoModal: FC<Props> = ({ onClose, children }: Props) => {
    return (
        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500
                }
            }}>
            <Box className={styles.container} sx={style}>
                <div className={styles.container}>
                    {children}
                </div>
            </Box>
        </Modal>
    )
}