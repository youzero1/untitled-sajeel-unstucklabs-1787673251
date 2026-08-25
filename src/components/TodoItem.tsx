import type { Todo } from '@/types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const priorityStyles: Record<Todo['priority'], string> = {
  low: 'bg-slate-700 text-slate-300',
  medium: 'bg-amber-500/20 text-amber-300',
  high: 'bg-rose-500/20 text-rose-300',
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-xl bg-slate-900 border border-slate-800 px-4 py-3">
      <button
        onClick={() => onToggle(todo.id)}
        aria-label={todo.done ? 'Mark as not done' : 'Mark as done'}
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
          todo.done ? 'border-indigo-500 bg-indigo-500' : 'border-slate-600'
        }`}
      >
        {todo.done && (
          <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
            <path
              fillRule="evenodd"
              d="M16.704 5.29a1 1 0 010 1.415l-7.07 7.071a1 1 0 01-1.415 0L3.296 8.855a1 1 0 111.414-1.414l3.222 3.222 6.364-6.364a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`truncate text-sm ${todo.done ? 'text-slate-500 line-through' : 'text-slate-100'}`}>
          {todo.text}
        </p>
        <div className="mt-1 flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${priorityStyles[todo.priority]}`}>
            {todo.priority}
          </span>
          {todo.dueDate && (
            <span className="text-[11px] text-slate-500">Due {todo.dueDate}</span>
          )}
        </div>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        aria-label="Delete task"
        className="shrink-0 text-slate-500 transition hover:text-rose-400"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482 41.03 41.03 0 00-2.365-.298V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zm-3.696 3.72a.75.75 0 10-1.498.06l.5 8.5a.75.75 0 101.498-.09l-.5-8.5zm6.892 0a.75.75 0 10-1.498-.09l-.5 8.5a.75.75 0 101.498.09l.5-8.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </li>
  );
}
