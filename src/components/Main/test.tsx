import { render, screen } from '@testing-library/react'

import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
        screen.getByRole('heading', { name: /react avançado/i }))
          .toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot()
  });

  it('should render the styles corretly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 
      'background-color': '#06092b', 
      'color': '#fff',
      'width': '100%',
      'height': '100%',
      'padding': '3rem',
      'text-align': 'center', 
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'center' 
  })

  });
});