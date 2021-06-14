import axios from 'axios'

const { token } = JSON.parse(localStorage.getItem('user') || '{}')
if (token) {
  axios.defaults.headers.common = {
    Authorization: 'Bearer ' + token,
  }
}

const api = axios.create()

export default api
