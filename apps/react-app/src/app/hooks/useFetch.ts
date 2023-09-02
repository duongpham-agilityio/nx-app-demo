import { useCallback, useEffect, useState } from 'react';

// services
import {
  getTodo,
  addTodo as postTodo,
  removeTodo as del,
  updateTodo as update,
  Todo,
} from '@todo-app/api';

export const useFetchTodo = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addTodo = useCallback((name: string) => {
    setIsLoading(true);
    postTodo({ name, isCompleted: false })
      .then((res) => setTodoList((prev) => [...prev, res.data]))
      .finally(() => setIsLoading(false));
  }, []);

  const removeTodo = useCallback((id: string) => {
    setIsLoading(true);
    del(id)
      .then(() => setTodoList((prev) => prev.filter((todo) => todo.id !== id)))
      .finally(() => setIsLoading(false));
  }, []);

  const updateTodo = useCallback((id: string, todo: Omit<Todo, 'id'>) => {
    setIsLoading(true);
    update(id, todo)
      .then((res) =>
        setTodoList((prev) =>
          prev.map((todo) => {
            if (todo.id === id) return res.data;

            return todo;
          })
        )
      )
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const fetch = () => {
      setIsLoading(true);
      getTodo()
        .then((todoList) => setTodoList(todoList.data))
        .finally(() => setIsLoading(false));
    };

    fetch();
  }, []);

  return {
    todoList,
    isLoading,
    addTodo,
    removeTodo,
    updateTodo,
    mutate: setTodoList,
  };
};
