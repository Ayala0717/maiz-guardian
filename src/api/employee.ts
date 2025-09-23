import { fetchApiService } from '~/utils/fetchApi'
import type { WorkerResponse } from '~/types/models/employees'

const endpoint = 'employees'

const employeeResponse = fetchApiService<WorkerResponse>(endpoint)

async function getWorkersResponse() {
  return await employeeResponse.fetchApi()
}

export { getWorkersResponse }
