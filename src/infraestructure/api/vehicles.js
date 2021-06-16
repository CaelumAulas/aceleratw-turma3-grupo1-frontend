import api from '.'

export async function listVehicles() {
  return await api.get('/vehicle')
}

export async function newVehicle({ brandName, model, year, price }) {
  return await api.post('/vehicle', { brandName, model, year, price })
}

export async function deleteVehicle(id) {
  return await api.delete(`vehicle/${id}`)
}

export async function updateVehicle(id, { brandName, model, year, price }) {
  return await api.put(`/vehicle/${id}`, { brandName, model, year, price })
}
