import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from '../containers/HeyArnoldContainer';

describe('Hey Arnold Container', () => {
  it('renders a list of characters to the page', async () => {
    render(<HeyArnoldContainer />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'character' });
  });
});

