import { defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'

export default defaultConfig({
  config: {
    classes: generateClasses({
      global: {
        input: 'form-input'
      },
      select: {
        input: 'form-select'
      },
      radio: {
        input: 'form-radio'
      },
      checkbox: {
        input: 'form-checkbox'
      },
      textarea: {
        input: 'form-textarea'
      },
      submit: {
        input: 'bg-blue-500 text-white rounded py-2 px-4'
      }
    })
  }
})
