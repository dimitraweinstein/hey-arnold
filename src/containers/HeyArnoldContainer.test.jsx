import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from '../containers/HeyArnoldContainer';

describe('Hey Arnold Container', () => {
  it('renders a list of characters to the page', async () => {
    render(<HeyArnoldContainer />);

    screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
  });
});

