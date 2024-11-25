import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { WinnerDisplay } from './WinnerDisplay.extended';

// TODO complete tests
describe('WinnerDisplayExtended', () => {
  it('renders the winner text correctly', () => {
    // TODO - complete the test
    const { container } = render(<WinnerDisplay text="Red Dragon Wins" />);
    const defaultText = container.querySelector(
      '.MuiTypography-root.MuiTypography-body1',
    );

    expect(defaultText).toBeInTheDocument();
  });
});
