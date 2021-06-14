import api from './api'

export async function listVehicles() {
  return await api.get('/vehicle')
}

export async function newVehicle({ brandname, model, year, price }) {
  return await api.post('/vehicle', { brandname, model, year, price })
}

export async function deleteVehicle(id) {
  return await api.delete(`veiculos/${id}`)
}

export async function updateVehicle(id, { brandName, model, year, price }) {
  return await api.put(`/vehicle/${id}`, { brandName, model, year, price })
}
