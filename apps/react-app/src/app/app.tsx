import { useCallback, useMemo } from 'react';

// hooks
import { useFetchTodo, useForm, InitValueForm } from './hooks';

// components
import { Input, TodoItem } from './components';

// services

export function App() {
  const { todoList, isLoading, addTodo, removeTodo, updateTodo } =
    useFetchTodo();
  const { formData, changeData, onSubmit } = useForm(
    {
      todo: '',
    },
    useCallback(
      (data: InitValueForm) => {
        addTodo(data.todo);
      },
      [addTodo]
    )
  );

  const renderTodo = useMemo(() => {
    return todoList.map((todo) => {
      return (
        <TodoItem
          value={todo.name}
          key={todo.id}
          isComplete={todo.isCompleted}
          onRemove={() => removeTodo(todo.id)}
          onComplete={() =>
            updateTodo(todo.id, {
              name: todo.name,
              isCompleted: !todo.isCompleted,
            })
          }
        />
      );
    });
  }, [todoList, removeTodo, updateTodo]);

  return (
    <div
      style={{
        width: '350px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        Todo App
      </h1>
      <form action="#" method="post" onSubmit={onSubmit}>
        <Input
          value={formData.todo}
          name="todo"
          onChange={changeData}
          placeholder="What you will focus on today?"
          disabled={isLoading}
        />
      </form>
      <ul>
        {renderTodo}
        {isLoading && <p>Loading...</p>}
      </ul>
    </div>
  );
}

export default App;
