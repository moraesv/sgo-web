import api from '../../../utils/api'

export async function createStatusSemaforo(data) {
  try {
    const response = await api.post(`/api/status-semaforo`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
