import React from 'react';
import { IconCheck, IconCross } from '@/icons';
import {
  StyledCompletionListItemContainer,
  StyledRemoveButton,
  StyledCompleteMark,
  StyledIncompleteMark,
} from './styles';
import { ICompletionListItemProps } from './types';

export const CompletionListItem: React.FC<ICompletionListItemProps> = ({ label, isCompleted }) => {
  return (
    <StyledCompletionListItemContainer role="button">
      {isCompleted ? (
        <StyledCompleteMark>
          <IconCheck />
        </StyledCompleteMark>
      ) : (
        <StyledIncompleteMark />
      )}
      <span>{label}</span>
      <StyledRemoveButton>
        <IconCross />
      </StyledRemoveButton>
    </StyledCompletionListItemContainer>
  );
};
