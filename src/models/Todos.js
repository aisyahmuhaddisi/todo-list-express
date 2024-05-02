import mongoose from 'mongoose';

const TodosSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active',
    required: true
  }
});

export default mongoose.model('Todos', TodosSchema);
