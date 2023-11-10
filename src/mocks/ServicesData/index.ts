import { ServiceDataParams } from '@/@types'

export const servicesTableMock: ServiceDataParams[] = [
  {
    id: 1,
    service: 'SERPRO',
    status: 'up',
    message: '',
  },
  {
    id: 2,
    service: 'Conselho Nacional de Justiça',
    status: 'warning',
    message: 'Pode apresentar lentidão - Manutenção Preventiva até 15/06/2023',
  },
  {
    id: 3,
    service: 'Tribunal de Justiça',
    status: 'error',
    message: 'Sem privisão de normalização',
  },
  {
    id: 4,
    service: 'Gov.BR',
    status: 'up',
    message: 'Manutenção preventiva prevista para 17/07/2023',
  },
]

export const servicesHealthHeader = [
  { name: 'Serviço', isFixed: false },
  { name: 'Status', isFixed: false },
  { name: 'Observação', isFixed: false },
]
