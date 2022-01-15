import HomePage from '@pages/index'

import { render, screen } from '../test-utils'

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<HomePage />)

    const heading = screen.getByText(/Hello world!/i)

    expect(heading).toBeInTheDocument()
  })
})
