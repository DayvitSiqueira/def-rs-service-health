export interface OptionProps {
  value: string | number
  label: string
}

export interface SelectProps {
  options: OptionProps[]
  color?: string
}
