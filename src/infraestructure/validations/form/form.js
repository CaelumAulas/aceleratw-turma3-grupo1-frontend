export function validateUser(user) {
  if (user.length < 3) {
    return { isValid: false, text: 'O usuário deve ter no mínimo 3 dígitos.' }
  }
  return { isValid: true, text: '' }
}

export function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { isValid: false, text: 'Senha deve ter 4 e 72 dígitos.' }
  }
  return { isValid: true, text: '' }
}

export function validatePasswordConfirmation(password, passwordConfirmation) {
  if (password !== passwordConfirmation) {
    return {
      isValid: false,
      text: 'A confirmação de senha e a senha não batem.',
    }
  }
  return { isValid: true, text: '' }
}

export function validateCarYear(year) {
  let yearInt = parseInt(year)
  if (yearInt < 1980) {
    return { isValid: false, text: 'O ano deve ser superior a 1980' }
  } else if (yearInt > 2021) {
    return { isValid: false, text: 'O ano não pode ser superior ao atual' }
  }
  return { isValid: true, text: '' }
}

export function validateCarModel(model) {
  if (model.length < 3) {
    return { isValid: false, text: 'O modelo deve ter no mínimo 3 dígitos.' }
  }
  return { isValid: true, text: '' }
}

export function validateCarBrand(brand) {
  if (brand.name.trim().length < 1) {
    return {
      isValid: false,
      text: 'É obrigatório selecionar a marca do veículo',
    }
  }
  return { isValid: true, text: '' }
}
