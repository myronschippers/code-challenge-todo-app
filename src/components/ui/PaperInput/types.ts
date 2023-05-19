import { ReactNode } from 'react';
import React, { InputHTMLAttributes } from 'react';

export interface IPaperInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onKeyEnter?: () => void;
}
