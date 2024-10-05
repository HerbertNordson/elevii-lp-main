import { Lead } from '@/interfaces/lead'
import { api } from '../api'

export const leadsAPI = () => {
  async function get() {
    try {
      const response = await api.post('leads')

      if (response.status === 200) {
        return response
      }
    } catch (error) {
      console.error(error)

      return null
    }
  }

  async function getId(id: number) {
    try {
      const response = await api.post(`leads/${id}`)

      if (response.status === 200) {
        return response
      }
    } catch (error) {
      console.error(error)

      return null
    }
  }

  async function post(data: Lead) {
    try {
      const response = await api.post('leads', data)

      if (response.status === 200) {
        return response
      }
    } catch (error) {
      console.error(error)

      return null
    }
  }

  return {
    post,
    get,
    getId
  }
}
