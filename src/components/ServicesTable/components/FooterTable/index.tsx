import PagesSelect from '@/components/PagesSelect'

interface FooterTableProps {
  onChange: (selectedValue: string) => void
}

export default function FooterTable({ onChange }: FooterTableProps) {
  const handleSelectChange = (value: string) => {
    if (onChange) {
      onChange(value)
    }
  }

  return (
    <div className="flex flex-col items-end justify-end w-full mt-6 gap-6">
      <div className="flex items-end justify-between w-full mt-6 gap-6">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            Resultados por página:
          </p>
          <PagesSelect onChange={handleSelectChange} />
        </div>
      </div>
    </div>
  )
}
