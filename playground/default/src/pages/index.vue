<template>
  <BaseLayout>
    <h1 class="text-6xl my-10 dark:text-white">Hello!</h1>
    <button class="bg-blue-500 text-white rounded py-2 px-4" @click="increment()">
      Számláló: {{ counter }}
    </button>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@layouts/BaseLayout.vue'
import { useCounter } from '@stores/CounterStore.mjs'
import { mapState, mapActions } from 'pinia'

export default {
  components: {
    BaseLayout
  },
  computed: {
    ...mapState(useCounter, ['counter'])
  },
  methods: {
    ...mapActions(useCounter, ['increment'])
  }
}
</script>
