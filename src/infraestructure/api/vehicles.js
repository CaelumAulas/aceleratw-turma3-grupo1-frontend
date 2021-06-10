import api from './api'

export async function listVehicles() {
  return await api.get('veiculos')
}

export async function newVehicle({ brand, model, year, price }) {
  return await api.post('veiculos', { brand, model, year, price })
}

export async function deleteVehicle(id) {
  return await api.delete(`veiculos/${id}`)
}
