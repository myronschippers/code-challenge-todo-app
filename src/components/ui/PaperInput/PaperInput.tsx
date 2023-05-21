import React, { KeyboardEvent } from 'react';
import { StyledInput } from './styles';
import { Paper } from '@/components/ui/Paper';
import { IPaperInputProps } from './types';

export const PaperInput: React.FC<IPaperInputProps> = ({ children, onKeyEnter, ...props }) => {
  const onKeyEnterHandler = (keyEvent: KeyboardEvent) => {
    if (onKeyEnter && keyEvent.code === 'Enter') {
      onKeyEnter();
    }
  };

  return (
    <Paper
      padding={0.2}
      data-testid="PaperInput-container"
    >
      <StyledInput
        {...props}
        onKeyDown={onKeyEnterHandler}
      />
    </Paper>
  );
};
