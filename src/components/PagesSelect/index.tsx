import { Select } from '../Select'

function PagesSelect() {
  return (
    <Select
      options={[
        {
          value: '10',
          label: '10',
        },
        {
          value: '15',
          label: '15',
        },
        {
          value: '20',
          label: '20',
        },
      ]}
    />
  )
}

export default PagesSelect
