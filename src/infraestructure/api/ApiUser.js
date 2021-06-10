import api from './api'

export default async function registerUser({ username, password }) {
  return await api.post('users', { username, password })
}
