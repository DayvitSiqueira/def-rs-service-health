import { ServiceDataParams } from '@/@types'

export type ServicesTableHeader = { name: string; isFixed: boolean }

export interface ServicesHealthContentProps {
  data: ServiceDataParams[] | undefined
  servicesHealthHeader: ServicesTableHeader[]
  isLoading: boolean
  isError: boolean
}
