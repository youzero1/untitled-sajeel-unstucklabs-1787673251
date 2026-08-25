import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import Header from '@/components/Header';
import AddTodoForm from '@/components/AddTodoForm';
import TodoList from '@/components/TodoList';
import StatsFooter from '@/components/StatsFooter';
import type { Priority, Todo } from '@/types/todo';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(text: string, priority: Priority, dueDate: string | null) {
    setTodos((prev) => [
      { id: crypto.randomUUID(), text, priority, dueDate, done: false },
      ...prev,
    ]);
  }

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  const completed = todos.filter((t) => t.done).length;

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12">
      <div className="mx-auto w-full max-w-lg">
        <Header />
        <AddTodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
        <StatsFooter total={todos.length} completed={completed} />
      </div>
    </div>
  );
}
