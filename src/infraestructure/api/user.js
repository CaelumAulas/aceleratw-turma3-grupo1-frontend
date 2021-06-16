import api from 'infraestructure/api'

export async function registerUser({ username, password }) {
  return await api.post('users', { username, password })
}

export async function listUser() {
  return await api.get('/user')
}
