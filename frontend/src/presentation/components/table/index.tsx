import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FC } from 'react';

type Props = {
    data: {
        name: string,
        id: number,
        amount: number,
        status: string,
        due: string
    }[]
}

const createData = (
    name: string,
    id: number,
    amount: number,
    status: string,
    due: string
) => {
    return { name, id, amount, status, due };
}

const rows = [
    createData('Felipe Saadi', 1, 32000, "Pago", "29/08/2024"),
    createData('Paulo Brito', 1, 30000, "Pago", "17/05/2024")
];

export const TableComponent: FC<Props> = ({ data }: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">amount</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Due</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell >{row.id}</TableCell>
                            <TableCell component="th" scope="row" align="right">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.due}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}