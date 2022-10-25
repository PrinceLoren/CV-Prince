import { render } from '@test-utils'
import React from 'react'
import { Home, HOME_TEST_ID } from '~/screens/Home'

describe('[pages] Home', () => {
  it('should render correctly', () => {
    const renderer = render(<Home />)
    const renderedElement = renderer.getByTestId(HOME_TEST_ID)

    expect(renderedElement).toBeTruthy()
  })
})
