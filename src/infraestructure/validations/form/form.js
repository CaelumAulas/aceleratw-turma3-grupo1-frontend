export function validateUser(user) {
  if (user.length < 3) {
    return { isValid: false, text: 'O usuário deve ter no mínimo 3 dígitos.' }
  } else {
    return { isValid: true, text: '' }
  }
}

export function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { isValid: false, text: 'Senha deve ter 4 e 72 dígitos.' }
  } else {
    return { isValid: true, text: '' }
  }
}

export function validatePasswordConfirmation(password, passwordConfirmation) {
  console.log(password, passwordConfirmation)
  if (password !== passwordConfirmation) {
    return {
      isValid: false,
      text: 'A confirmação de senha e a senha não batem.',
    }
  } else {
    return { isValid: true, text: '' }
  }
}
