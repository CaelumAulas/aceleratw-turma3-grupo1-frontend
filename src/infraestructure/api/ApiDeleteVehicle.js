import api from './Api'

export default async function ApiListVehicles(id) {
  return await api.delete(`veiculos/${id}`)
}
