import api from 'infraestructure/api/api'

export async function registerUser({ username, password }) {
  return await api.post('/user', { username, password })
}

export async function listUser() {
  return await api.get('/user')
}
