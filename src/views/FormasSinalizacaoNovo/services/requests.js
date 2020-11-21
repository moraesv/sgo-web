import api from '../../../utils/api'

export async function createFormaSinalizacao(data) {
  try {
    const response = await api.post(`/api/formas-sinalizacao`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
