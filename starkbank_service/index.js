import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import invoiceRoutes from './src/routes/invoice.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/invoice', invoiceRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});