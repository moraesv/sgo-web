import api from '../../../utils/api'

export async function getCaracteristicaLocal(id) {
  try {
    const response = await api.get(`/api/caracteristicas-local/${id}`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateCaracteristicaLocal(id, data) {
  try {
    const response = await api.put(`/api/caracteristicas-local/${id}`, data)
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
