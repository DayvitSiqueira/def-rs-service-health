import { StatusServiceParams } from '@/@types'

export const renderCurrentSelection = (currentBadge: StatusServiceParams) => {
  switch (currentBadge) {
    case 'up':
      return (
        <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Disponível
        </span>
      )
    case 'warning':
      return (
        <span className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Instável
        </span>
      )
    case 'error':
      return (
        <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Indisponível
        </span>
      )
    default:
      return null
  }
}
