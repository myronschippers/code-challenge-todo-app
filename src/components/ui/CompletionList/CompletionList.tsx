import React from 'react';
import { CompletionListItem } from '@/components/ui/CompletionListItem';
import { Paper } from '@/components/ui/Paper';
import { StyledCompletionListContainer } from './styles';
import { ICompletionListProps } from './types';

export const CompletionList: React.FC<ICompletionListProps> = ({ children, list }) => {
  return (
    <StyledCompletionListContainer>
      {list.map((listItem, itemIndex) => (
        <CompletionListItem
          key={itemIndex}
          label={listItem.text}
          isCompleted={listItem.completed}
        />
      ))}
    </StyledCompletionListContainer>
  );
};
