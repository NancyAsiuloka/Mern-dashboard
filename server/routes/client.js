import express from 'express';

const router = express.Router();

router.get('/products', getProducts);

export default router;