import { ReactNode } from 'react';

export interface ICompletionListItemProps {
  children?: ReactNode;
  isCompleted: boolean;
  label: string;
  itemId: number;
  removeItemCallback?: (id: number) => void;
  completeToggleItemCallback?: (id: number) => void;
}
