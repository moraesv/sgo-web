import api from '../../../utils/api'

export async function getIluminacoesLocal() {
  try {
    const response = await api.get(`/api/iluminacoes-local`)
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
      return response.data ? response.data : null
    }
    return null
  } catch (e) {
    alert(e)
    return null
  }
}
