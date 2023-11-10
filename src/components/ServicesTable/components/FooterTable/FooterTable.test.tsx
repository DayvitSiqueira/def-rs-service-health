import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import FooterTable from './index' // Update the import path accordingly

describe('FooterTable', () => {
  const mockOnChange = jest.fn()

  it('renders the FooterTable component correctly', () => {
    render(<FooterTable onChange={mockOnChange} />)
    const textElement = screen.getByText('Resultados por página:')

    expect(textElement).toBeInTheDocument()
  })

  it('renders the PagesSelect component within FooterTable', () => {
    render(<FooterTable onChange={mockOnChange} />)
    const selectElement = screen.getByRole('combobox')

    expect(selectElement).toBeInTheDocument()
  })

  it('handles the onChange event of PagesSelect', () => {
    render(<FooterTable onChange={mockOnChange} />)
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: '15' } })

    expect(mockOnChange).toHaveBeenCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith('15')
  })

  it('matches the snapshot', () => {
    const { container } = render(<FooterTable />)
    expect(container).toMatchSnapshot()
  })
})
