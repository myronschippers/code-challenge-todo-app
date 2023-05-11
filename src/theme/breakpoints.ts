export const bpSizeUnits = {
  xs: 330,
  sm: 592,
  md: 768,
  lg: 992,
  xl: 1024,
  xxl: 1200,
} as const;

const customMediaQuery = (sizeUnit: number, direction: 'up' | 'down'): string => {
  if (direction === 'up') {
    return `@media (min-width: ${sizeUnit}px)`;
  }

  return `@media (max-width: ${sizeUnit}px)`;
};

const up = (bpSize: BreakpointSizeKeys) => {
  const sizeValue = bpSizeUnits[bpSize];
  return customMediaQuery(sizeValue, 'up');
};

const down = (bpSize: BreakpointSizeKeys) => {
  const sizeValue = bpSizeUnits[bpSize];
  return customMediaQuery(sizeValue, 'down');
};

type BreakpointSizeKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IMediaQueriesBreakpoints {
  custom: (size: number, direction: 'up' | 'down') => string;
  up: (bpKey: BreakpointSizeKeys) => string;
  down: (bpKey: BreakpointSizeKeys) => string;
}

export const media: IMediaQueriesBreakpoints = {
  custom: customMediaQuery,
  up,
  down,
};
