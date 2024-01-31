import type { PartialFerment } from '@/assets/models/ferment'
import axios from 'axios'

const baseURL = import.meta.env.VITE_BACKEND_URL

const apiClient = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getFerments() {
    return apiClient.get('/ferments')
  },

  getFerment(id: number) {
    return apiClient.get('/ferments/' + id)
  },

  createFerment(ferment: PartialFerment) {
    return apiClient.post('/ferments', ferment)
  },

  }
}
