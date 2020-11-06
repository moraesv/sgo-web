import axios from 'axios'

import apiConfig from './apiConfig'

export const api = axios.create({
  baseURL: apiConfig.url,
  responseType: 'json',
  withCredentials: true,
})

/* api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    throw error
  }
) */

export default api
