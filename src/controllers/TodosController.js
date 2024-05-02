// import httpStatusConstants from '../constants/HttpStatusConstants';
import TodosService from '../services/TodosService.js';

// const { HTTP_STATUS_OK } = httpStatusConstants;
const {
  add,
  edit,
  getAll,
  getById,
  remove
} = TodosService;

/*
  Todos controller
 */
class TodosController {
  static getAll = async (req, res, next) => {
    try {
      const todos = await getAll(req.query);

      res.status(200);
      res.json({
        data: todos
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (req, res, next) => {
    const id = req.params.id;

    try {
      const todo = await getById(id);
      res.status(200);
      res.json({
        data: todo
      });
    } catch (error) {
      next(error);
    }
  };

  static add = async (req, res, next) => {
    try {
      const todo = await add(req.body);

      res.status(201)
      res.json(todo);
    } catch (error) {
      next(error);
    }
  };

  static edit = async (req, res, next) => {
    try {
      const { params, body } = req;
      const updatedTodo = await edit(params, body);

      res.status(200)
      res.json(updatedTodo);
    } catch (error) {
      next(error);
    }
  };

  static remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedTodo = await remove(id);

      res.status(200)
      res.json(deletedTodo);
    } catch (error) {
      next(error);
    }
  }
}

export default TodosController;
