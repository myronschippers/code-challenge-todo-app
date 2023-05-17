import React from 'react';
import { IconCheck, IconCross } from '@/icons';
import {
  StyledCompletionListItemContainer,
  StyledRemoveButton,
  StyledCompleteMark,
  StyledIncompleteMark,
} from './styles';
import { ICompletionListItemProps } from './types';

export const CompletionListItem: React.FC<ICompletionListItemProps> = ({
  itemId,
  label,
  isCompleted,
  removeItemCallback,
}) => {
  const onClickRemove = () => {
    if (removeItemCallback) {
      removeItemCallback(itemId);
    }
  };

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
      <StyledRemoveButton onClick={onClickRemove}>
        <IconCross />
      </StyledRemoveButton>
    </StyledCompletionListItemContainer>
  );
};
