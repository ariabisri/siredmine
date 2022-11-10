import { Express } from "express";
import cors from 'cors';
import loginRoutes from '../loginController';

const router = Express.Router();

router.get('/login', loginRoutes);

export default router;