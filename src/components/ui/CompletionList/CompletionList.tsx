import React from 'react';
import { CompletionListItem } from '@/components/ui/CompletionListItem';
import { StyledCompletionListContainer } from './styles';
import { ICompletionListProps } from './types';

export const CompletionList: React.FC<ICompletionListProps> = ({
  list,
  removeItemCallback,
  toggleCompletedForItemCallback,
}) => {
  return (
    <StyledCompletionListContainer>
      {list.map((listItem, itemIndex) => (
        <CompletionListItem
          key={itemIndex}
          itemId={listItem.id}
          label={listItem.text}
          isCompleted={listItem.completed}
          removeItemCallback={removeItemCallback}
          toggleCompletedForItemCallback={toggleCompletedForItemCallback}
        />
      ))}
    </StyledCompletionListContainer>
  );
};
