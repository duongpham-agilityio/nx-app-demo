import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

export const getTodo = () => {
  return api.get<Todo[]>('todos');
};

export const addTodo = (todo: Omit<Todo, 'id'>) => {
  return api.post<Todo>('todos', todo);
};

export const removeTodo = (id: string) => {
  return api.delete<Todo>(`todos/${id}`);
};

export const updateTodo = (id: string, todo: Omit<Todo, 'id'>) => {
  return api.patch<Todo>(`todos/${id}`, todo);
};
