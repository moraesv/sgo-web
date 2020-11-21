import api from '../../../utils/api'

export async function getStatusSemaforo() {
  try {
    const response = await api.get(`/api/status-semaforo`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateStatusSemaforo(id, data) {
  try {
    const response = await api.put(`/api/status-semaforo/${id}`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
