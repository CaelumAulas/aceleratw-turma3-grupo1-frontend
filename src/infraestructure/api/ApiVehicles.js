import api from './Api'

async function ApiListVehicles() {
  return await api.get('veiculos')
}

async function ApiNewVehicle({ brand, model, year, price }) {
  return await api.post('veiculos', { brand, model, year, price })
}

export { ApiListVehicles, ApiNewVehicle }
