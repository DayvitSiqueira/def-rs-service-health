import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PagesSelect from './index'
import { optionsDefault } from './constants'

describe('PagesSelect Component', () => {
  it('renders the PagesSelect component with options', () => {
    render(<PagesSelect onChange={() => {}} />)
    const selectElement = screen.getByRole('combobox')
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    expect(optionElements).toHaveLength(3)

    optionElements.forEach((option, index) => {
      expect(option).toHaveValue(optionsDefault[index].value)
      expect(option).toHaveTextContent(optionsDefault[index].label)
    })
  })

  it('calls the onChange handler when an option is selected', () => {
    const onChangeMock = jest.fn()
    render(<PagesSelect onChange={onChangeMock} />)
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: '15' } })

    expect(onChangeMock).toHaveBeenCalledWith('15')
  })

  it('handles the onChange event correctly', () => {
    const onChangeMock = jest.fn()
    render(<PagesSelect onChange={onChangeMock} />)
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: '20' } })

    expect(onChangeMock).toHaveBeenCalledWith('20')
  })
})
