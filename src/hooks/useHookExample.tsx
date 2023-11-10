import { useState } from 'react'

export function useHookExample(initialValue: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialValue)

  function toggleValue() {
    setValue(prevValue => !prevValue)
  }

  return [value, toggleValue]
}
