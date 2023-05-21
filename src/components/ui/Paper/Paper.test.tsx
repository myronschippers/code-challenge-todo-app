import { screen } from '@testing-library/react';
import { render } from '@/test-utils';
import { Paper } from './Paper';

describe('Paper UI Component', () => {
  it('renders container for the component content', () => {
    render(<Paper>Content</Paper>);

    const screenPaperInputContainer = screen.getByTestId('Paper-container');

    expect(screenPaperInputContainer).toBeInTheDocument();
  });
});
