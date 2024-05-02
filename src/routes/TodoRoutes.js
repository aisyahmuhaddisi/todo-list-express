import express from 'express';
import TodosController from '../controllers/TodosController.js';

const {
  add,
  edit,
  getAll,
  getById,
  remove
} = TodosController;

const router = express.Router();

/*
  Todos routes
 */
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', add);
router.patch('/:id', edit);
router.delete('/:id', remove);

export default router;
