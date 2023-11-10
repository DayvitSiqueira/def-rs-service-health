import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ServiceDataParams } from '@/@types'
import ServicesTable from './index'

const mockServicesHealthHeader = [
  { name: 'Serviço', isFixed: false },
  { name: 'Status', isFixed: false },
  { name: 'Observação', isFixed: false },
]

const mockServicesTableMock: ServiceDataParams[] = [
  {
    id: 1,
    service: 'SERPRO',
    status: 'up',
    message: '',
  },
  {
    id: 2,
    service: 'Conselho Nacional de Justiça',
    status: 'warning',
    message: 'Pode apresentar lentidão - Manutenção Preventiva até 15/06/2023',
  },
  {
    id: 3,
    service: 'Tribunal de Justiça',
    status: 'error',
    message: 'Sem privisão de normalização',
  },
  {
    id: 4,
    service: 'Gov.BR',
    status: 'up',
    message: 'Manutenção preventiva prevista para 17/07/2023',
  },
]

describe('ServicesTable', () => {
  it('renders the ServicesTable component correctly with data', () => {
    render(
      <ServicesTable
        header={mockServicesHealthHeader}
        tableData={mockServicesTableMock}
        isLoading={false}
        isError={false}
      />
    )

    const tableElement = screen.getByRole('table')
    const thElements = screen.getAllByRole('columnheader')
    const tdElements = screen.getAllByRole('cell')

    expect(tableElement).toBeInTheDocument()
    expect(thElements.length).toBe(3)
    expect(tdElements.length).toBe(12)
  })

  it('renders the ServicesTable component correctly when loading', () => {
    render(
      <ServicesTable
        header={mockServicesHealthHeader}
        tableData={[]}
        isLoading
        isError={false}
      />
    )

    const loadingTableElement = screen.getByRole('table')
    const loadingThElements = screen.getAllByRole('columnheader')
    const loadingTdElements = screen.getAllByRole('cell')

    expect(loadingTableElement).toBeInTheDocument()
    expect(loadingThElements.length).toBe(3)
    expect(loadingTdElements.length).toBe(3)
  })

  it('renders the ServicesTable component correctly when there is an error', () => {
    render(
      <ServicesTable
        header={mockServicesHealthHeader}
        tableData={[]}
        isLoading={false}
        isError
      />
    )

    const errorComponentElement = screen.getByTestId('error-component')

    expect(errorComponentElement).toBeInTheDocument()
  })

  it('matches the snapshot', () => {
    const { container } = render(
      <ServicesTable
        header={mockServicesHealthHeader}
        tableData={mockServicesTableMock}
        isLoading={false}
        isError={false}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
