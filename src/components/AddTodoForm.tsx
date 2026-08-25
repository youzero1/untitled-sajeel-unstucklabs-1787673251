import { useState } from 'react';
import type { Priority } from '@/types/todo';

interface AddTodoFormProps {
  onAdd: (text: string, priority: Priority, dueDate: string | null) => void;
}

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority, dueDate || null);
    setText('');
    setPriority('medium');
    setDueDate('');
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 rounded-2xl bg-slate-900 border border-slate-800 p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you need to do?"
        className="w-full rounded-lg bg-slate-800 px-4 py-2.5 text-slate-100 placeholder-slate-500 outline-none ring-1 ring-slate-700 focus:ring-2 focus:ring-indigo-500"
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="low">Low priority</option>
          <option value="medium">Medium priority</option>
          <option value="high">High priority</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-100 ring-1 ring-slate-700 outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="ml-auto rounded-lg bg-indigo-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          Add task
        </button>
      </div>
    </form>
  );
}
