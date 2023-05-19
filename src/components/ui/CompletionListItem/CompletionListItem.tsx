import React, { MouseEvent } from 'react';
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
  toggleCompletedForItemCallback,
}) => {
  const onClickRemove = (clickEvent: MouseEvent) => {
    clickEvent.stopPropagation();

    if (removeItemCallback) {
      removeItemCallback(itemId);
    }
  };

  const onClickCompleteToggle = () => {
    if (toggleCompletedForItemCallback) {
      toggleCompletedForItemCallback(itemId);
    }
  };

  return (
    <StyledCompletionListItemContainer
      isCompleted={isCompleted}
      onClick={onClickCompleteToggle}
      role="button"
    >
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
