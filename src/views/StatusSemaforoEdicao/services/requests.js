import api from '../../../utils/api'

export async function getStatusSemaforo(id) {
  try {
    const response = await api.get(`/api/status-semaforo/${id}`)
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
      alert('Salvo')
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
