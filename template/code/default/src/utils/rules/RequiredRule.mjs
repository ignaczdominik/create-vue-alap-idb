import { defineRule } from 'vee-validate'

defineRule('requiredRule', (value) => {
  if (!value || value === '') {
    return 'A mező kitöltése kötelező!'
  }
  return true
})
