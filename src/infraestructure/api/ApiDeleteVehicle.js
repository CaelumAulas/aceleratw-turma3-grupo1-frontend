import api from './Api'

export default async function ApiListVehicles(id) {
  return await api.get('veiculos', { id })
}
