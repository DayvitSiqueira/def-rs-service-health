export type StatusServiceParams = 'up' | 'error' | 'warning'

export type ServiceDataParams = {
  id: number
  service: string
  status: StatusServiceParams
  message: string
}
