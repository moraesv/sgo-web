import api from '../../../utils/api'

export default async function login(data) {
  try {
    await api.post('/api/login', data)

    return true
  } catch (e) {
    console.log(e)
    return null
  }
}
