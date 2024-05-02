// import errorHandlerUtils from '../utils/ErrorHandlerUtils';
// import httpStatusConstants from '../constants/HttpStatusConstants';
// import httpMessageConstants from '../constants/HttpMessageConstants';
import TodosRepository from '../repositories/TodosRepository.js';

// const { createError } = errorHandlerUtils;
// const { COURSE_NOT_FOUND_MESSAGE } = httpMessageConstants;
// const { HTTP_STATUS_NOT_FOUND } = httpStatusConstants;
const {
  add,
  edit,
  getAll,
  getById,
  remove
} = TodosRepository;

/*
  Todos service
 */
class TodosService {
  static getAll = async () => {
    return await getAll();
  };

  static getById = async (id) => {
    const todo = await getById(id);

    if (!todo) {
      throw Error('Not Found', '404')
    }

    return todo;
  };

  static add = async (body) => {
    const { title, status } = body;
    const todo = {
      title,
      status
    };

    return await add(todo);
  };

  static edit = async (params, body) => {
    const { id } = params;
    const { title, status } = body;

    let payload = {}

    if(title) payload = { title }
    if(status) payload = { ...payload, status }

    const updatedTodo = await edit(id, payload);

    if (!updatedTodo) {
      throw Error('Failed to update', '500')
    }

    return updatedTodo;
  };

  static remove = async (id) => {
    const deleted = await remove(id);

    if (!deleted) {
      throw Error('Failed to delete', '500')
    }

    return deleted;
  }
}

export default TodosService;
