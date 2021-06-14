import api from './api'

export async function login({ username, password }) {
  return await api.post('auth', { username, password })
}
