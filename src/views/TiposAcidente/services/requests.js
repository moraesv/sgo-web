import api from '../../../utils/api'

export async function getTiposAcidente() {
  try {
    const response = await api.get(`/api/tipos-acidente`)
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
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
