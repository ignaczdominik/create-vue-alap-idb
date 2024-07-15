<template>
  <BaseLayout>
    <h1 class="text-4xl my-10">Hello!</h1>
    <button class="bg-green-700 text-white rounded" @click="increment()">
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
