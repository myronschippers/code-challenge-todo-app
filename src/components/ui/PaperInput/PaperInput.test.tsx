import { screen } from '@testing-library/react';
import { render } from '@/test-utils';
import { PaperInput } from './PaperInput';

describe('PaperInput UI Component', () => {
  it('renders container for the component content', () => {
    render(<PaperInput />);

    const screenPaperInputContainer = screen.getByTestId('PaperInput-container');

    expect(screenPaperInputContainer).toBeInTheDocument();
  });
});
