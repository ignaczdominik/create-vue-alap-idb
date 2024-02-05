<script setup>
import BaseLayout from '@layouts/BaseLayout.vue'
import { useCounter } from '@stores/CounterStore.mjs'

const CounterStore = useCounter()
</script>

<template>
  <BaseLayout class="text-center">
    <h1 class="display-1 my-5">Hello!</h1>
    <button class="btn btn-success" @click="CounterStore.increment()">
      Számláló: {{ CounterStore.counter }}
    </button>
  </BaseLayout>
</template>
