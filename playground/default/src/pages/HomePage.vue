<script setup>
import { useCounter } from '@/stores/CounterStore.mjs'

const CounterStore = useCounter()
</script>

<template>
  <main class="text-center">
    <h1 class="display-1 my-5">Hello!</h1>
    <button class="btn btn-success" @click="CounterStore.increment()">
      Számláló: {{ CounterStore.counter }}
    </button>
  </main>
</template>
