import axios from 'axios';
import { Ecdsa, PrivateKey } from 'starkbank-ecdsa';

let privateKeyContent = '';

const createInvoice = async (req, res) => {
    try {
        const { amount, taxId, name } = req.body;

        const body = {
            amount: amount,
            taxId: taxId,
            name: name
        };

        let accessId = '';
        let accessTime = Math.floor(Date.now() / 1000);
        const message = `${accessId}:${accessTime}:${JSON.stringify(body)}`;

        const privateKey = PrivateKey.fromPem(privateKeyContent);

        const signature = Ecdsa.sign(message, privateKey);
        const accessSignature = signature.toBase64();

        const response = await axios.post('https://sandbox.api.starkbank.com/v2/invoice', body, {
            headers: {
                'Access-Id': accessId,
                'Access-Time': accessTime,
                'Access-Signature': accessSignature,
                'Content-Type': 'application/json'
            }
        });

        res.status(201).json({ response: response.data });
    } catch (error) {
        console.error('Error Response:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
};

export default {
    createInvoice,
};