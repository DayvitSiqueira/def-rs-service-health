import ErrorComponent from '@/components/ErrorComponent'
import { ServicesTableProps } from './types'
import LoadingTable from './components/LoadingTable'
import { renderCurrentSelection } from './helpers/renderBadgeTable'

export default function ServicesTable({
  header,
  tableData,
  isLoading,
  isError,
}: ServicesTableProps) {
  let content

  if (isError) {
    content = <ErrorComponent />
  } else if (isLoading) {
    content = <LoadingTable />
  } else {
    content = (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 text-center">
          <tr>
            {header.map((item, index, array) => (
              <th
                key={item.name}
                scope="col"
                className={`p-4 whitespace-nowrap bg-gray-100 dark:bg-gray-800 border-b-2
                  ${index === array.length - 1 && 'sticky right-0'}
                `}
              >
                {item.name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData?.map(item => (
            <tr
              key={item.id}
              className="border-b border-gray-200 dark:border-gray-700 text-center"
            >
              <td className="p-4">{item.service}</td>
              <td className="p-4">{renderCurrentSelection(item.status)}</td>
              <td className="p-4">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
      {content}
    </div>
  )
}
