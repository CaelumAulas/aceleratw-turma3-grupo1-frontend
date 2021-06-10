import api from './api'

export async function login({ user, password }) {
  return await api.get('login', { user, password })
}
