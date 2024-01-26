import type { PartialFerment } from '@/assets/models/ferment'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
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

  deleteFerment(fermentId: number) {
    return apiClient.delete('/ferments/' + fermentId)
  }
}
