import { servicesTableMock } from '@/mocks/ServicesData'
import { ServiceDataParams } from '@/@types'
// import axios from "axios";

interface ServicesHealthRequestInterface {
  getServicesStatus(): ServiceDataParams[]
}

export const delay = (ms: number) =>
  new Promise(res => {
    setTimeout(res, ms)
  })

export const getServicesStatus = async (): Promise<ServiceDataParams[] | undefined> => {
  try {
    // const { data } = await axios.get(""); // add route

    const data = servicesTableMock

    await delay(750)

    return data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

export default {
  getServicesStatus,
} as unknown as ServicesHealthRequestInterface
