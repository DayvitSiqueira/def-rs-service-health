import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { renderCurrentSelection } from './renderBadgeTable'

describe('renderCurrentSelection Helper', () => {
  it('renders the correct badge for "up" status', () => {
    const { getByText } = render(renderCurrentSelection('up'))

    const badgeElement = getByText('Disponível')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-green-100 text-green-800')
  })

  it('renders the correct badge for "warning" status', () => {
    const { getByText } = render(renderCurrentSelection('warning'))

    const badgeElement = getByText('Instável')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-yellow-100 text-yellow-800')
  })

  it('renders the correct badge for "error" status', () => {
    const { getByText } = render(renderCurrentSelection('error'))

    const badgeElement = getByText('Indisponível')
    expect(badgeElement).toBeInTheDocument()
    expect(badgeElement).toHaveClass('bg-red-100 text-red-800')
  })

  it('renders nothing for unknown status', () => {
    const { container } = render(renderCurrentSelection('unknown'))

    expect(container.firstChild).toBeNull()
  })
})
