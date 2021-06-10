import api from 'infraestructure/api/api'

export async function registerUser({ username, password }) {
  return await api.post('users', { username, password })
}
