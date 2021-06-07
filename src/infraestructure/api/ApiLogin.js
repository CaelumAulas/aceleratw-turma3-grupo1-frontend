import axios from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000' })

export default async function ApiLogin() {
  const request = await api.get('login')
  return request.data
}
