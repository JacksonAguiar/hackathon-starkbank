import { Router } from 'express';
import invoiceController from '../controllers/invoiceController.js';

const router = Router();

router.post('/', invoiceController.createInvoice);

export default router;