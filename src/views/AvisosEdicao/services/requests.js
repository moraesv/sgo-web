import api from '../../../utils/api'

export async function getAviso(id) {
  try {
    const response = await api.get(`/api/avisos/${id}`)
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
      alert('Salvo')
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
