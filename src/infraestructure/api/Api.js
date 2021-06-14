import axios from 'axios'

function getToken() {
  const { token } = JSON.parse(localStorage.getItem('user') || '{}')
  return token
}

const api = axios.create()

api.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) config.headers['Authorization'] = `bearer ${token}`
    return config
  },
  error => {
    Promise.reject(error)
  },
)

export default api
