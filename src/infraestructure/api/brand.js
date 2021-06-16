import api from '.'

export async function listBrands() {
    return await api.get('/brand')
}