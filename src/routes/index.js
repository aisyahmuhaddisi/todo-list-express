import express from 'express';
import todoRoutes from './TodoRoutes.js';

const router = express.Router();

const indexRoutes = (app) => {
  app.use('/api', router);
  router.use('/todos', todoRoutes);
};

export default indexRoutes;
