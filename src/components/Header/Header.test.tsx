import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'

describe('Header', () => {
  it('renders the component with the correct structure', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner')
    const navElement = screen.getByRole('navigation')
    const titleElement = screen.getByText('DEFENSORIA PÚBLICA')
    const subtitleElement = screen.getByText('Estado do Rio Grande do Sul')

    expect(headerElement).toBeInTheDocument()
    expect(navElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(subtitleElement).toBeInTheDocument()
  })
})
