import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingTable from './index'

describe('LoadingTable', () => {
  it('renders the LoadingTable component correctly', () => {
    render(<LoadingTable />)
    const tableElement = screen.getByRole('table')
    const thElements = screen.getAllByRole('columnheader')
    const tdElements = screen.getAllByRole('cell')
    const statusElements = screen.getAllByRole('status')

    expect(tableElement).toBeInTheDocument()
    expect(thElements.length).toBe(3)
    expect(tdElements.length).toBe(3)
    expect(statusElements.length).toBe(3)
  })

  it('matches the snapshot', () => {
    const { container } = render(<LoadingTable />)
    expect(container).toMatchSnapshot()
  })
})
