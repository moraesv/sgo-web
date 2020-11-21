import api from '../../../utils/api'

export async function createTipoPista(data) {
  try {
    const response = await api.post(`/api/tipos-pista`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
