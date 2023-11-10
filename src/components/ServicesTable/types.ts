import { TableProps as FlowbiteTableProps } from 'flowbite-react'
import { ServiceDataParams } from '@/@types'

export interface HeaderProps {
  name: string
  isFixed?: boolean
}

export interface ServicesTableProps extends FlowbiteTableProps {
  header: HeaderProps[]
  tableData: ServiceDataParams[] | undefined
  isLoading: boolean
  isError: boolean
}
