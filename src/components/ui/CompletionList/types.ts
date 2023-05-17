import { ReactNode } from 'react';

export interface ICompletionListItem {
  completed: boolean;
  text: string;
  createdAt: Date;
}

export interface ICompletionListProps {
  children?: ReactNode;
  list: ICompletionListItem[];
}
