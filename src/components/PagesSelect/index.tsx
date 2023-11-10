import React from 'react'
import { Select } from '../Select'
import { optionsDefault } from './constants'

interface PagesSelectProps {
  onChange: (selectedValue: string) => void
}

function PagesSelect({ onChange }: PagesSelectProps) {
  const handleSelectChange = (value: string) => {
    if (onChange) {
      onChange(value)
    }
  }

  return <Select options={optionsDefault} onChange={handleSelectChange} />
}

export default PagesSelect
