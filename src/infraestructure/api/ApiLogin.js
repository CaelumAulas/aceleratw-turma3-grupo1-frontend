import api from './Api'

export default async function ApiLogin({ user, password }) {
  return await api.get('login', { user, password })
}
