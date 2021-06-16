import api from '.'

export async function login({ username, password }) {
  return await api.post('auth', { username, password })
}
