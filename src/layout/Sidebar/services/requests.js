import api from '../../../utils/api'

export default async function logout() {
  try {
    await api.post('/api/logout')

    return true
  } catch (e) {
    console.log(e)
    return null
  }
}
