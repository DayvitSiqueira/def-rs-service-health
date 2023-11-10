import { useQuery } from '@tanstack/react-query'
import { getServicesStatus } from '@/services/services-status'
import { servicesHealthHeader } from '@/mocks/ServicesData'
import { ReactElement } from 'react'
import MainLayout from '@/components/layouts/MainLayout'
import ServicesTablesLayout from '@/components/layouts/ServicesTablesLayout'
import ServicesHealthContent from './services-health-content'

export default function ServicesHealth() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['services-health'],
    queryFn: getServicesStatus,
  })

  return (
    <ServicesHealthContent
      data={data}
      isLoading={isLoading}
      isError={isError}
      servicesHealthHeader={servicesHealthHeader}
    />
  )
}

ServicesHealth.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <ServicesTablesLayout>{page}</ServicesTablesLayout>
    </MainLayout>
  )
}
