import api from './Api'

export default async function ApiListVehicles() {
  return await api.get('veiculos')
}
