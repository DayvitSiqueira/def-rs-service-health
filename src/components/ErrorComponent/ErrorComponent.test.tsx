import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorComponent from './index' // Update the import path accordingly

describe('ErrorComponent', () => {
  it('renders the component with the correct structure', () => {
    render(<ErrorComponent />)
    const errorCode = screen.getByText('404')
    const errorMessage = screen.getByText('Ops...')
    const errorDescription = screen.getByText('Erro ao carregar dados')

    expect(errorCode).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(errorDescription).toBeInTheDocument()
  })
})
