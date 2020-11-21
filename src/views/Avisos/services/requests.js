import api from '../../../utils/api'

export async function getAvisos() {
  try {
    const response = await api.get(`/api/avisos`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateAviso(id, data) {
  try {
    const response = await api.put(`/api/avisos/${id}`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
