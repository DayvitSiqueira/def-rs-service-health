import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Select } from './index'

describe('Select Component', () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ]

  it('renders the Select component with options', () => {
    render(<Select options={options} onChange={() => {}} />)
    const selectElement = screen.getByRole('combobox')
    const optionElements = screen.getAllByRole('option')

    expect(selectElement).toBeInTheDocument()
    expect(optionElements).toHaveLength(options.length)

    optionElements.forEach((option, index) => {
      expect(option).toHaveValue(options[index].value)
      expect(option).toHaveTextContent(options[index].label)
    })
  })

  it('calls the onChange handler when an option is selected', () => {
    const onChangeMock = jest.fn()
    render(<Select options={options} onChange={onChangeMock} />)
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'option2' } })

    expect(onChangeMock).toHaveBeenCalledWith('option2')
  })

  it('handles the onChange event correctly', () => {
    const onChangeMock = jest.fn()
    render(<Select options={options} onChange={onChangeMock} />)
    const selectElement = screen.getByRole('combobox')

    fireEvent.change(selectElement, { target: { value: 'option3' } })

    expect(onChangeMock).toHaveBeenCalledWith('option3')
  })
})
