import { ReactNode } from 'react';

export interface ICompletionListItemProps {
  children?: ReactNode;
  isCompleted: boolean;
  label: string;
}
