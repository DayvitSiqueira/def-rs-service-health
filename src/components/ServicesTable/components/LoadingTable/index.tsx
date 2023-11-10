function LoadingTable() {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 text-center">
        <tr>
          {[0, 1, 2].map(item => {
            return (
              <th
                key={item}
                scope="col"
                className="p-4 whitespace-nowrap bg-gray-100 dark:bg-gray-800 border-b-2 h-12"
              />
            )
          })}
        </tr>
      </thead>

      <tbody>
        <tr>
          {[0, 1, 2].map(item => (
            <td key={item} className="p-4">
              <div role="status" className="animate-pulse">
                <div className="h-11 bg-gray-200 rounded-lg dark:bg-gray-700 w-90 mb-5" />
                <div className="h-11 bg-gray-200 rounded-lg dark:bg-gray-700 w-90 mb-5" />
                <div className="h-11 bg-gray-200 rounded-lg dark:bg-gray-700 w-90 mb-2" />
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default LoadingTable
