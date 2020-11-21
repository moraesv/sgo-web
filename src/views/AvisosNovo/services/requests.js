import api from '../../../utils/api'

export async function createAviso(data) {
  try {
    const response = await api.post(`/api/avisos`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
