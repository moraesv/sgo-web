import api from '../../../utils/api'

export async function getAtendimento(id) {
  try {
    const response = await api.get(`/api/atendimentos/${id}`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateAtendimento(id, data) {
  try {
    const response = await api.put(`/api/atendimentos/${id}`, data)
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
