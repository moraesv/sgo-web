import api from '../../../utils/api'

export async function getFormasSinalizacao() {
  try {
    const response = await api.get(`/api/formas-sinalizacao`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateFormaSinalizacao(id, data) {
  try {
    const response = await api.put(`/api/formas-sinalizacao/${id}`, data)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
