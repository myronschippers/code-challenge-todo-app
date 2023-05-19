import React, { KeyboardEvent } from 'react';
import { StyledInput } from './styles';
import { Paper } from '@/components/ui/Paper';
import { IPaperInputProps } from './types';

export const PaperInput: React.FC<IPaperInputProps> = ({ children, onKeyEnter, ...props }) => {
  const onKeyEnterHandler = (keyEvent: KeyboardEvent) => {
    console.log('onKeyEnterHandler:', keyEvent);
    if (onKeyEnter && keyEvent.code === 'Enter') {
      onKeyEnter();
    }
  };

  return (
    <Paper padding={0.2}>
      <StyledInput
        {...props}
        onKeyDown={onKeyEnterHandler}
      />
    </Paper>
  );
};
