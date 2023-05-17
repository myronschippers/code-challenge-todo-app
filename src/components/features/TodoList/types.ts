import { ReactNode } from 'react';

export interface ITodoListProps {
  children?: ReactNode;
}

export interface ITodoItem {
  id: number;
  completed: boolean;
  text: string;
  createdAt: Date;
}
