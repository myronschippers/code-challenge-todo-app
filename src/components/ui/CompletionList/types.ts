import { ReactNode } from 'react';

export interface ICompletionListItem {
  id: number;
  completed: boolean;
  text: string;
  createdAt: Date;
}

export interface ICompletionListProps {
  children?: ReactNode;
  list: ICompletionListItem[];
  removeItemCallback?: (id: number) => void;
  completeItemCallback?: (id: number) => void;
  incompleteItemCallback?: (id: number) => void;
}
