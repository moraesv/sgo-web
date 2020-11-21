import api from '../../../utils/api'

export async function getTemposLocal() {
  try {
    const response = await api.get(`/api/tempos-local`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateTempoLocal(id, data) {
  try {
    const response = await api.put(`/api/tempos-local/${id}`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
