import { defineStore } from 'pinia'

export const useCounter = defineStore('counter-store', {
  state() {
    return {
      counter: 0
    }
  },
  actions: {
    increment(step = 1) {
      this.counter += step
    }
  },
  getters: {
    counter10X() {
      return this.counter * 10
    }
  }
})
