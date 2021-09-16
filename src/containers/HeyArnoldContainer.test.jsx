import React from 'react';
import { render, screen } from '@testing-library/react';
import HeyArnoldContainer from '../containers/HeyArnoldContainer';
import { MemoryRouter } from 'react-router';

describe('Hey Arnold Container', () => {
  it('renders a list of characters to the page', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldContainer />
      </MemoryRouter>
    );

    await screen.getByAltText('loading spinner');

    const ul = await screen.findByRole('list', { name: 'characters' });

    expect(ul).toMatchSnapshot();
  });
});

