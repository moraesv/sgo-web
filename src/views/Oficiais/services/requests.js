import api from '../../../utils/api'

export async function getOficiais() {
  try {
    const response = await api.get(`/api/oficiais`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateOficial(id, data) {
  try {
    const response = await api.put(`/api/oficiais/${id}`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
