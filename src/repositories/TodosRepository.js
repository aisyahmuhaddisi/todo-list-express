import mongoose from 'mongoose';
import Todos from '../models/Todos.js';

/*
  Todos repository
 */
class TodosRepository {
  static getAll = async (query) => {
    return await Todos.find(query)
  };

  static getById = async (todosId) => {
    return Todos.findById(todosId);
  };

  static add = async (todo) => {
    const todoObject = new Todos(todo);

    return Todos.create(todoObject);
  };

  static edit = async (id, updatePayload) => {
    const result = await Todos.findOneAndUpdate(
      { _id: id },
      { $set: updatePayload},
      {
        new: true,
        useFindAndModify: false,
      }
    );

    return { from: result };
  };

  static remove = (id) => {
    return Todos.findOneAndRemove(
      { _id: id },
      { useFindAndModify: false }
    );
  }
}

export default TodosRepository;
