import api from '../../../utils/api'

export async function getIluminacaoLocal(id) {
  try {
    const response = await api.get(`/api/iluminacoes-local/${id}`)
    if (response) {
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}

export async function updateIluminacaoLocal(id, data) {
  try {
    const response = await api.put(`/api/iluminacoes-local/${id}`, data)
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
