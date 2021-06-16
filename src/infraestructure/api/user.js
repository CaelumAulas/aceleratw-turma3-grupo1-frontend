import api from 'infraestructure/api'

export async function createUser({ username, password }) {
  return await api.post('/user', { username, password })
}

export async function listUser() {
  return await api.get('/user')
}

export async function updateUser(previousUsername, { username, password }) {
  return await api.put(`/user/${previousUsername}`, { username, password })
}

export async function deleteUser(username) {
  return await api.delete(`/user/${username}`)
}
