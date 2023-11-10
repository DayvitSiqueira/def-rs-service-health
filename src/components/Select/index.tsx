import { SelectProps } from './types'

export function Select({ options, color = 'green' }: SelectProps) {
  return (
    <select
      className={`max-w-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-${color}-500 focus:border-${color}-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-${color}-500 dark:focus:border-${color}-500`}
    >
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}
