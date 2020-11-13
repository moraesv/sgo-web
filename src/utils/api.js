import axios from 'axios'

import apiConfig from './apiConfig'

export const api = axios.create({
  baseURL: apiConfig.url,
  responseType: 'json',
  withCredentials: true,
})

function LoginIfNotAuthenticated(error) {
  if (error.response && error.response.status === 401) {
    window.location = '/login'
  }
}

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    LoginIfNotAuthenticated(error)
    throw error
  }
)

export default api
