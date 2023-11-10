import PagesSelect from '@/components/PagesSelect'
import Pagination from '@/components/Pagination'

export default function FooterTable() {
  return (
    <div className="flex flex-col items-end justify-end w-full mt-6 gap-6">
      <div className="flex items-end justify-between w-full mt-6 gap-6">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Resultados por página:
          </p>
          <PagesSelect />
        </div>

        <Pagination />
      </div>
    </div>
  )
}
