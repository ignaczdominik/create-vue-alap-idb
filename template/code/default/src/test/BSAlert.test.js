import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'
import BSAlert from '@/components/bootstrap/BSAlert.vue'

test('Mount component', async () => {
  expect(BSAlert).toBeTruthy()

  const wrapper = mount(BSAlert, {
    props: {
      alertType: 'success'
    },
    slots: {
      default: 'The test was successful!'
    }
  })

  expect(wrapper.text()).toContain('The test was successful!')
  expect(wrapper.classes()).toContain('alert-success')
})
