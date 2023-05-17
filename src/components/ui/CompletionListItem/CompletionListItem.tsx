import React from 'react';
import { StyledCompletionListItemContainer, StyledRemoveButton } from './styles';
import { ICompletionListItemProps } from './types';

export const CompletionListItem: React.FC<ICompletionListItemProps> = ({ label, isCompleted }) => {
  return (
    <StyledCompletionListItemContainer role="button">
      {isCompleted ? 'CHECK' : 'NONE'} {label}
      <StyledRemoveButton>remove</StyledRemoveButton>
    </StyledCompletionListItemContainer>
  );
};
