import './app/app.element';

// services
import { getTodo } from '@todo-app/api';

interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
}

const run = async () => {
  const contentEl = document.querySelector('#todo');

  if (contentEl) {
    try {
      const todoList = await getTodo();
      const html = (todoList.data as Todo[])
        .map((todo) => `<li>${todo.name}</li>`)
        .join('');

      contentEl.innerHTML = `
       <h1 style="font-size:24px; font-weight:600">Todo List</h1>
      <ul>${html}</ul>
      `;
    } catch (error) {
      contentEl.innerHTML = '<p>Something went wrong...</p>';
    }
  }
};

run();
