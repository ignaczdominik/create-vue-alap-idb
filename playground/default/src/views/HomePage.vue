<script setup>
import { useCounter } from '@stores/CounterStore.mjs'

const CounterStore = useCounter()
</script>

<template>
  <div class="row text-center">
    <div class="col-12">
      <h1 class="display-1 my-5">Hello!</h1>
    </div>
    <div class="col-12">
      <button class="btn btn-success" @click="CounterStore.increment()">
        Számláló: {{ CounterStore.counter }}
      </button>
    </div>
  </div>
</template>
