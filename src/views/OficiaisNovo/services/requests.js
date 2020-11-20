import api from '../../../utils/api'

export async function createOficial(id, data) {
  try {
    const response = await api.post(`/api/oficiais`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
