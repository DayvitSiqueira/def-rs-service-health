import ServicesTable from '@/components/ServicesTable'
import FooterTable from '@/components/ServicesTable/components/FooterTable'
import Head from 'next/head'
import { ServicesHealthContentProps } from './services-health.types'

export default function ServicesHealthContent({
  data,
  servicesHealthHeader,
  isLoading,
  isError,
}: ServicesHealthContentProps) {
  return (
    <>
      <Head>
        <title>Services Health</title>
      </Head>

      <ServicesTable
        tableData={data}
        header={servicesHealthHeader}
        isLoading={isLoading}
        isError={isError}
      />

      <FooterTable onChange={() => null} />
    </>
  )
}
