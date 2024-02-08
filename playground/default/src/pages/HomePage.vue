<template>
  <BaseLayout>
    <h1 class="display-1 my-5">Hello!</h1>
    <button class="btn btn-success" @click="useCounter().increment()">
      Számláló: {{ useCounter().counter }}
    </button>
  </BaseLayout>
</template>

<script>
import BaseLayout from '@layouts/BaseLayout.vue'
import { useCounter } from '@stores/CounterStore.mjs'

export default {
  components: {
    BaseLayout
  }
}
</script>
