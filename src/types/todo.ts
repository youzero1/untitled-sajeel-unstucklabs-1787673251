export type Priority = 'low' | 'medium' | 'high';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
  priority: Priority;
  dueDate: string | null;
}
