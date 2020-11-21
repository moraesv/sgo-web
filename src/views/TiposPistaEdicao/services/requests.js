import api from '../../../utils/api'

export async function getTipoPista(id) {
  try {
    const response = await api.get(`/api/tipos-pista/${id}`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateTipoPista(id, data) {
  try {
    const response = await api.put(`/api/tipos-pista/${id}`, data)
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
