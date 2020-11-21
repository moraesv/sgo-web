import api from '../../../utils/api'

export async function getTipoAcidente(id) {
  try {
    const response = await api.get(`/api/tipos-acidente/${id}`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateTipoAcidente(id, data) {
  try {
    const response = await api.put(`/api/tipos-acidente/${id}`, data)
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
