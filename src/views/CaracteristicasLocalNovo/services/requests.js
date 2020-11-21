import api from '../../../utils/api'

export async function createCaracteristicaLocal(data) {
  try {
    const response = await api.post(`/api/caracteristicas-local`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
