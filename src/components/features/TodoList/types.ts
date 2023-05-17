import { ReactNode } from 'react';

export interface ITodoListProps {
  children?: ReactNode;
}

export interface ITodoItem {
  completed: boolean;
  text: string;
  createdAt: Date;
}
